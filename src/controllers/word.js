const express = require("express");

const WordService = require("../services/wordService");
const validateRequestBody = require("../middlewares/validateMiddleware");
const { BadRequest, Unauthorized, Forbidden, NotFound} = require("../errors/index");

const router = express.Router();
const wordService = new WordService();

/**
 * @swagger
 * /api/v1/word:
 *   post:
 *     summary: 단어장에 새로운 단어 추가
 *     tags:
 *       - word
 *     parameters:
 *       - name: user_key
 *         in: path
 *         description: The ID of the user
 *         required: true
 *         schema:
 *           type: integer
 *       - name: list_key
 *         in: path
 *         description: The ID of the list
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               list_question:
 *                 type: string
 *                 example: 覚える
 *               list_answer:
 *                 type: string
 *                 example: おぼ-える
 *               difficulty:
 *                 type: string
 *                 example: 보통
 *     responses:
 *       200:
 *         description: 회원가입 완료.
 *       400:
 *         description: BAD_REQUEST.
 */

  router.post(
    "/",
    validateRequestBody([ "list_key", "question","answer"]),
      async (req, res, next) => {
        try {
          
          const { list_key, question, answer } = req.body;
          await wordService.pushWord(list_key, question, answer);
          res.status(201).json({ message: "cool!" });

        } catch(err) {
          next(err)
        }  
      }
    )

/**
 * @swagger
 * /api/v1/word/user/{user_key}/list/{list_key}:
 *   get:
 *     summary: 단어장에서 단어 조회
 *     tags:
 *       - word
 *     parameters:
 *       - name: user_key
 *         in: path
 *         description: The ID of the user
 *         required: true
 *         schema:
 *           type: integer
 *       - name: list_key
 *         in: path
 *         description: The ID of the list
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 단어장에서 단어 조회 성공.
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
 *                       list_question:
 *                         type: string
 *                       list_answer:
 *                         type: string
 *                       difficulty:
 *                         type: string
 *             example:
 *               data:
 *                 - list_question: "覚える"
 *                   list_answer: "おぼ-える"
 *                   difficulty: "쉬움"
 *       400:
 *         description: BAD_REQUEST.
 */

  router.get("/list/:list_key", async(req, res, next) => {
    try {

      const { list_key } = req.params;

      await wordService.executeAlgorithm(list_key);
      const words =  await wordService.loadWords(list_key);
      
      res.status(200).json({ data: words });

    } catch(error) {
      next(error)
    }
    

  });
/**
 * @swagger
 * /api/v1/word/difficulty/user/{user_key}/list/{list_key}:
 *   patch:
 *     summary: 단어의 난이도 변경
 *     tags:
 *       - word
 *     parameters:
 *       - name: user_key
 *         in: path
 *         description: The ID of the user
 *         required: true
 *         schema:
 *           type: integer
 *       - name: list_key
 *         in: path
 *         description: The ID of the list
 *         required: true
 *         schema:
 *           type: integer
 *       - name: word_key
 *         in: path
 *         description: The ID of the word
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               difficulty:
 *                 type: string
 *                 example: 쉬움
 *     responses:
 *       200:
 *         description: 난이도 수정 완료.
 *       400:
 *         description: BAD_REQUEST.
 */

  router.patch("/", validateRequestBody(["difficulty"]), async (req, res, next) => {

      try {
        const { list_key, word_number } = req.query;
        const { difficulty } = req.body
        
        await wordService.modifyDifficulty(list_key, word_number, difficulty);
        res.status(200).json({ message: "cool!" });

      } catch(err) {
        next(err)
      }
    }
  )
  
module.exports = router;