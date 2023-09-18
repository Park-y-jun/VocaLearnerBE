const UserRepository = require('../repositories/userRepository')
const { BadRequest, Unauthorized, Forbidden, NotFound} = require("../errors/index");

const bcrypt = require("bcrypt");

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
      throw err
    }
  }

  async confirmUserLogin(id, password) {
  
    const userCheck = await this.repository.findUserById(id)
    if (userCheck === null) {
      throw new Unauthorized("Your action is invalid");
    } 

    const passwordCheck = bcrypt.compareSync(password, userCheck.password)
    if (passwordCheck === false) {
      throw new Unauthorized("Your action is invalid");
    }
  }  
}

module.exports = UserService;