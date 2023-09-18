









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
 *                 - list_name: 일본어 동사 단어장
 *                   created_at: "2023-05-14T12:34:56Z"
 *                 - list_name: 일본어 경여 단어장
 *                   created_at: "2023-05-14T12:34:56Z"
 *       400:
 *         description: BAD_REQUEST.
 */


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
 *                 - list_name: 일본어 동사 단어장
 *                   created_at: "2023-05-14T12:34:56Z"
 *                 - list_name: 일본어 경여 단어장
 *                   created_at: "2023-05-14T12:34:56Z"
 *       400:
 *         description: BAD_REQUEST.
 */
