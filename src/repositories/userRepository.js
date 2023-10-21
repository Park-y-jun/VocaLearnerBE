const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
class UserRepository {
  constructor() {
    this.db = prisma;
  }

  async createUser(id, password) {
    await this.db.user.create({
      data: {
        id,
        password,
      },
    });
  }

  async findUserById(id) {
    const user = await this.db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async throwToken(token) {
    const expiryDate  = new Date(jwt.decode(token).exp * 1000);
    await this.db.loggedOutToken.create({
      data: {
        token: token,
        expiryDate: expiryDate,
      },
    });
  }
}

module.exports = UserRepository;
