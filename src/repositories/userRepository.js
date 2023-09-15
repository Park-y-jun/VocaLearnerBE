const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class UserRepository {
  constructor () {
    this.db = prisma
  }

  async findById() {
    
  }




}

module.exports = UserRepository;