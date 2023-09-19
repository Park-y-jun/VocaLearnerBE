const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ListRepository {
  constructor() {
    this.db = prisma;
  }

  async createList(user_key, name) {
    await this.db.list.create({
      data: {
        user_key,
        name,
      },
    });
  }

  async listOwnerCheck(user_key) {

    const listOwner = await this.db.list.findFirst({
      where: {
        user_key: parseInt(user_key),
      },
    });
  
    return listOwner;
  }

  async getList(user_key) {

    const lists = await this.db.list.findMany({
      where: {
        user_key: parseInt(user_key),
      },
    });
    
    return lists;
  }

  
}

module.exports = ListRepository;