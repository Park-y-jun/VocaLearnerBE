const express = require("express");

const ListService = require('../services/listService')
const validateRequestBody = require("../middlewares/validateMiddleware");
const { BadRequest ,Unauthorized ,Forbidden ,NotFound,} = require("../errors/index");

const router = express.Router();
const listService = new ListService();

/**
 * @swagger
 * /api/v1/list
 *   post:
 *     summary: 유저 단어장 만들기
 *     tags:
 *       - list
 *     parameters:
 *       - in: path
 *         name: user_key
 *         schema:
 *           type: number
 *         description: 유저 key
 *     responses:
 *       200:
 *         description: 모든 게시물 조회 성공.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       list_name:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date
 *             example:
 *               data:
 *                 - list_name: 일본어 경여 단어장
 *                   created_at: "2023-05-14T12:34:56Z"
 *       400:
 *         description: BAD_REQUEST.
 */

  router.post("/", validateRequestBody(["user_key", "name"]), async (req, res, next) => {
    try {
      const { user_key, name } = req.body;

      await listService.createList(user_key, name);

      res.status(201).json({ message: "cool!" });
    } catch(err) {
      next(err)
    } 

    }
  );

/**
 * @swagger
 * /api/v1/list/{user_key}:
 *   get:
 *     summary: 유저의 모든 단어장 목록 조회
 *     tags:
 *       - list
 *     parameters:
 *       - in: path
 *         name: user_key
 *         schema:
 *           type: number
 *         description: 유저 key
 *     responses:
 *       200:
 *         description: 모든 게시물 조회 성공.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       list_name:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date
 *             example:
 *               data:
 *                 - list_name: 일본어 경여 단어장
 *                   created_at: "2023-05-14T12:34:56Z"
 *       400:
 *         description: BAD_REQUEST.
 */
  router.get("/user_key/:user_key", async (req, res, next) => {
    try {
      const { user_key } = req.params
      await listService.userHasList(user_key);

      const lists = await listService.getList(user_key);

      res.status(200).json({data: lists});
    } catch (err) {
      next(err);
    }
  });

module.exports = router;