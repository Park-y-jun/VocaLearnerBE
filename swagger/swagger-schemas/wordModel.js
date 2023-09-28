/**
 * @swagger
 * components:
 *   schemas:
 *     words:
 *       type: object
 *       properties:
 *         word_key:
 *           type: number
 *           description: words 테이블의 key 입니다.
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
 *             - INITIAL
 *             - EASY
 *             - NORMAL
 *             - HARD
 *           default: 보통
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
 *         nextReviewDate:
 *           type: string
 *           format: date
 *           description: 암기 알고리즘에 따른 해당 단어가 나타나는 다음 시간입니다.. 
 *       example:
 *         word_number: 3
 *         list_key: 1
 *         list_question: "覚える"
 *         list_answer: "おぼ-える"
 *         difficulty: "EASY"
 *         created_at: "2023-09-27 09:17:32.201"
 *         updated_at: "2023-09-27 09:17:32.201"
 *         deleted_at: null
 *         nextReviewDate: 2023-09-29 09:17:32.201
 */
