const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const res = await prisma.list.findUnique({
      where: {
        user_key: 11,
      },
    });
    console.log("All users: ", res);
  } catch (err) {
    console.log("Read a user Error:", err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
