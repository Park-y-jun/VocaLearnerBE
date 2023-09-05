/**
 * @swagger
 * components:
 *   schemas:
 *     words:
 *       type: object
 *       properties:
 *         list_key:
 *           type: number
 *           description: lists 테이블의 외래키 입니다.
 *         list_question:
 *           type: string
 *           description: 단어의 문제입니다.
 *         list_answer:
 *           type: string
 *           description: 단어의 답입니다.
 *         difficulty:
 *           type: string
 *           enum:
 *             - 쉬움
 *             - 보통
 *             - 어려움
 *           description: 단어의 난이도 입니다. 
 *         created_at:
 *           type: string
 *           format: date
 *           description: 단어 생성날짜입니다.
 *         updated_at:
 *           type: string
 *           format: date
 *           description: 단어 정보 업데이트 날짜입니다.
 *         deleted_at:
 *           type: string
 *           format: date
 *           description: 단어 정보가 삭제된 날짜입니다.
 *       example:
 *         list_key: 1
 *         list_question: "覚える"
 *         list_answer: "おぼ-える"
 *         difficulty: "쉬움"
 *         created_at: "2023-09-05"
 *         updated_at: "2023-09-05"
 *         deleted_at: null
 */
