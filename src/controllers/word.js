/**
 * @swagger
 * /api/v1/user/{user_key}/list/{list_key}:
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

/**
 * @swagger
 * /api/v1/user/{user_key}/list/{list_key}:
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

/**
 * @swagger
 * /api/v1/user/{user_key}/list/{list_key}/word/{word_key}:
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

