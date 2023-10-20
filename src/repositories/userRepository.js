const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class UserRepository {
  constructor() {
    this.db = prisma
  }

  async createUser(id, password) {
    
    await this.db.user.create({
      data: {
        id,
        password
      },
    });
  }

  async findUserById(id) {
   const user = await this.db.user.findUnique({
      where: {
        id
      }
    })

    return user;
  }

  async throwToken(token) {
    await this.db.loggedOutToken.create({
      data: {
        token: token,
      },
    });
  }
}

module.exports = UserRepository;