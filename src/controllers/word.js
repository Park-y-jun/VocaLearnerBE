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
 *       - name: list_key
 *         in: path
 *         description: The key of the list
 *         required: true
 *         schema:
 *           type: integer
 *       - name: question
 *         in: path
 *         description: word question 
 *         required: true
 *         schema:
 *           type: integer
 *       - name: answer
 *         in: path
 *         description: word answer
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
 *               list_key:
 *                 type: int
 *                 example: 1
 *               question:
 *                 type: string
 *                 example: 覚える
 *               answer:
 *                 type: string
 *                 example: おぼ-える
 *     responses:
 *       201:
 *         description: Create word was successful.
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
          res.status(201).json({ message: "Create word was successful." });

        } catch(err) {
          next(err)
        }  
      }
    )

/**
 * @swagger
 * /api/v1/word/list/{list_key}:
 *   get:
 *     summary: 단어장에서 단어 조회
 *     tags:
 *       - word
 *     parameters:
 *       - name: list_key
 *         in: path
 *         description: The ID of the list
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Read words successful!.
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
 *                 - word_number: 5
 *                   list_key: 1
 *                   question: 覚える
 *                   answer: おぼ-える
 *                   difficulty: HARD
 *                   createdAt: 2023-09-26T10:52:17.797Z
 *                   updatedAt: 2023-09-27T10:52:17.797Z
 *                   deletedAt: null
 *                   nextReviewDate: 2023-09-28T10:52:17.797Z
 *       400:
 *         description: BAD_REQUEST.
 */

  router.get("/list/:list_key", async(req, res, next) => {
    try {

      const { list_key } = req.params;
      const words =  await wordService.loadWords(list_key);
      res.status(200).json({ data: words });

    } catch(error) {
      next(error)
    }
    

  });
/**
 * @swagger
 * /api/v1/word/:
 *   patch:
 *     summary: 단어의 난이도 변경
 *     tags:
 *       - word
 *     parameters:
 *       - name: list_key
 *         in: query
 *         description: The list key for the word.
 *         required: true
 *         schema:
 *           type: string
 *       - name: word_number
 *         in: query
 *         description: The number associated with the word.
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
 *                 example: NORMAL
 *     responses:
 *       200:
 *         description: Update Difficulty!.
 *       400:
 *         description: BAD_REQUEST.
 */

  router.patch("/", validateRequestBody(["difficulty"]), async (req, res, next) => {

      try {
        const { list_key, word_number } = req.query;
        const { difficulty } = req.body
        
        await wordService.modifyDifficulty(list_key, word_number, difficulty);
        res.status(200).json({ message: "Update Difficulty!" });

      } catch(err) {
        next(err)
      }
    }
  )
  
module.exports = router;