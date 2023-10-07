const UserRepository = require("../repositories/userRepository");
const { BadRequest, Unauthorized, Forbidden, NotFound,} = require("../errors/index");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async createUserWithHash(id, password) {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);

      const hashedPassword = await bcrypt.hash(password, salt);

      await this.repository.createUser(id, hashedPassword);
    } catch (err) {
      throw err;
    }
  }

  async confirmUserLogin(id, password) {
    const userCheck = await this.repository.findUserById(id);
    if (userCheck === null) {
      throw new Unauthorized("Your action is invalid");
    }

    const passwordCheck = bcrypt.compareSync(password, userCheck.password);
    if (passwordCheck === false) {
      throw new Unauthorized("Your action is invalid");
    }
  }

  async passedUser(id) {
    const user = await this.repository.findUserById(id);

    const tokenOptions = {
      algorithm: "HS256",
      expiresIn: "6h",
      issuer: "VocaLearnerBE",
    };

    const accessToken = jwt.sign(user, process.env.JWT_SECRET, tokenOptions);
    user.accessToken = accessToken;

    return user;
  }
}

module.exports = UserService;
