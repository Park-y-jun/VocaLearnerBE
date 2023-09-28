/**
 * @swagger
 * components:
 *   schemas:
 *     lists:
 *       type: object
 *       properties:
 *         list_key:
 *           type: number
 *           description: 테이블의 key 입니다.
 *         user_key:
 *           type: number
 *           description: 유저 테이블의 foreign key 입니다.
 *         list_name:
 *           type: string
 *           description: 단어장 이름 입니다.
 *         created_at:
 *           type: string
 *           format: date
 *           description: 유저 생성날짜입니다.
 *         updated_at:
 *           type: string
 *           format: date
 *           description: 유저 정보 업데이트 날짜입니다.
 *         deleted_at:
 *           type: string
 *           format: date
 *           description: 유저 정보가 삭제된 날짜입니다.
 *       example:
 *         list_key: 1
 *         user_key: 123
 *         list_name: "Japanese Vocabulary"
 *         created_at: "2023-09-27 09:17:32.201"
 *         updated_at: "2023-09-27 09:17:32.201"
 *         deleted_at: null
 */
