const cron = require("node-cron");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const cleanUpLoggedOutToken = () => {
  return cron.schedule(
    " 0 0 0 * * *",
    async () => {
      try {
        const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
        await prisma.loggedOutToken.deleteMany({
          where: {
            expiryDate: {
              lte: sixHoursAgo,
            },
          },
        });
      } catch (error) {
        console.error(
          "Error occurred while cleaning up expired tokens:",
          error
        );
      }
    },
    {
      scheduled: true,
      timezone: "UTC",
    }
  );
}

module.exports = cleanUpLoggedOutToken