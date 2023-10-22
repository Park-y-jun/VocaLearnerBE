const express = require('express')
const router = express.Router();
const UserService = require('../services/userService')
const validateRequestBody = require('../middlewares/validateMiddleware')
const { BadRequest, Unauthorized, Forbidden, NotFound,} = require("../errors/index");
const userService = new UserService()

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
 *       201:
 *         description: Sign-up was successful.
 *       400:
 *         description: BAD_REQUEST.
 */
router.post("/sign-up", validateRequestBody(["id", "password"]), async (req, res, next) => {
  try {

    const { id, password } = req.body;
    await userService.createUserWithHash(id, password);

    res.status(201).json({ message: "Sign-up was successful." });

  } catch (error) {
     next(error)
  }
});

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
 *         description: Sign-in was successful.
 *       400:
 *         description: BAD_REQUEST.
 */

router.post("/sign-in", validateRequestBody(["id", "password"]), async (req, res, next) => {
  try {

    const { id, password } = req.body;
    await userService.confirmUserLogin(id, password);
    const passedUser = await userService.passedUser(id);
    
    res.status(201).json({ data: passedUser });

  } catch (error) {
    next(error);
  }
});

// router.post(
//   "/logout",
//   validateRequestBody(["token"]), async(req, res, next) => {
//     try {
//       const { token } = req.body;
//       await userService.throwToken(token) 

//       res.status(201).json({ message: "Log-out was successful." });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;