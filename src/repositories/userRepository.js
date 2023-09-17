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
}

module.exports = UserRepository;