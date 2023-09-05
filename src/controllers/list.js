/**
 * @swagger
 * /api/v1/list/{user_key}:
 *   get:
 *     summary: 유저의 모든 단어장 조회
 *     tags:
 *       - list
 *     parameters:
 *       - in: query
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
 *                       id:
 *                         type: number
 *                       user_id:
 *                         type: number
 *                       title:
 *                         type: string
 *                       content:
 *                         type: string
 *                       view_count:
 *                         type: number
 *                       created_at:
 *                         type: string
 *                       updated_at:
 *                         type: string
 *                       deleted_at:
 *                         type: string
 *             example:
 *               data:
 *                 - id: 1
 *                   user_id: 123
 *                   title: "게시물 제목"
 *                   content: "게시물 내용"
 *                   view_count: 100
 *                   created_at: "2023-05-14T12:34:56Z"
 *                   updated_at: "2023-05-14T13:45:00Z"
 *                   deleted_at: null
 *                 - id: 2
 *                   user_id: 456
 *                   title: "다른 게시물 제목"
 *                   content: "다른 게시물 내용"
 *                   view_count: 50
 *                   created_at: "2023-05-13T09:12:34Z"
 *                   updated_at: "2023-05-13T11:23:45Z"
 *                   deleted_at: null
 *       400:
 *         description: BAD_REQUEST.
 */
