const express = require("express");

const ListService = require('../services/listService')
const validateRequestBody = require("../middlewares/validateMiddleware");
const { BadRequest ,Unauthorized ,Forbidden ,NotFound,} = require("../errors/index");

const router = express.Router();
const listService = new ListService();

/**
 * @swagger
 * /api/v1/list:
 *   post:
 *     summary: 유저 단어장 만들기
 *     tags:
 *       - list
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_key:
 *                 type: int
 *                 example: 2
 *               name:
 *                 type: string
 *                 example: "일본어 단어장"
 *     responses:
 *       201:
 *         description: Create list was successful.
 *       400:
 *         description: BAD_REQUEST.
 */


  router.post("/", validateRequestBody(["user_key", "name"]), async (req, res, next) => {
    try {
      const { user_key, name } = req.body;

      await listService.createList(user_key, name);

      res.status(201).json({ message: "Create list was successful." });
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
 *                       key:
 *                         type: int
 *                       user_key:
 *                         type: int
 *                       name:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                       updatedAt:
 *                         type: string
 *                         format: date 
 *                       deletedAt:
 *                         type: string
 *                         format: date 
 *             example:
 *               data:
 *                 - key: 1
 *                   user_key: 1
 *                   name: 일본어 경여 단어장
 *                   createdAt: "2023-09-26T10:51:45.010Z"
 *                   updatedAt: "2023-09-26T10:51:45.010Z"
 *                   deletedAt: null
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