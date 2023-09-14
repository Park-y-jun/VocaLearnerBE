/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         user_key:
 *           type: number
 *           description: 유저의 key 값입니다.
 *         id:
 *           type: string
 *           description: 유저의 아이디 입니다.
 *         password:
 *           type: string
 *           description: 유저의 비밀번호 입니다.
 *         created_at:
 *           type: string
 *           format: date
 *           description: 유저 생성날짜입니다.
 *         updated_at:
 *           type: string
 *           format: date
 *           description: 유저 정보 업데이트 날짜입니다 .
 *         deleted_at:
 *           type: string
 *           format: date
 *           description: 유저 정보가 삭제된 날짜입니다.
 *       example:
 *         user_key: 1
 *         id: user123
 *         password: password123
 *         created_at: "2023-09-05"
 *         updated_at: "2023-09-05"
 *         deleted_at: null
 */

