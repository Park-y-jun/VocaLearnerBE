/**
 * @swagger
 * /api/v1/sign-up:
 *   post:
 *     summary: 유저 회원가입
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: user123
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: 회원가입 완료.
 *       400:
 *         description: BAD_REQUEST.
 */

/**
 * @swagger
 * /api/v1/sign-in:
 *   post:
 *     summary: 유저 로그인
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: user123
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: 로그인 완료.
 *       400:
 *         description: BAD_REQUEST.
 */
