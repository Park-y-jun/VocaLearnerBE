const UserRepository = require('../repositories/userRepository')

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

  confirmUserLogin(id, password) {
    // 1. 요청받은 id가 db에 있는지 조회

    // 2. 요청받은 비밀번호와 db 비밀번호비교 이때 hash compare
   }
}

module.exports = UserService;