const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class WordRepository {
  constructor() {
    this.db = prisma;
  }

  async pushWord(list_key, question, answer) {
    await this.db.word.createMany({
      data: {
        list_key,
        question,
        answer,
      },
    });
  }

  async loadWords(list_key) {
    const words = await this.db.word.findMany({
      where: {
        list_key: parseInt(list_key),
      },
    });

    return words;
  }

  async modifyDifficulty(list_key, word_number, difficulty) {
    await this.db.word.update({
      where: {
        list_key: parseInt(list_key),
        word_number: parseInt(word_number),
      },
      data: {
        difficulty,
      },
    });
  }

  async executeAlgorithm(list_key) {

   const words = await this.db.word.findMany({
     where: {
       list_key: parseInt(list_key),
     },
   });

   let nextReviewDate = new Date();

   for (const word of words) {
    switch (word.difficulty) {
      case "EASY":
        const easyReviewDate = nextReviewDate.setDate(nextReviewDate.getDate() + 3);

        await this.db.word.updateMany({
          where: {
            difficulty: {
              contains: "EASY",
            },
          },
          data: {
            nextReviewDate: easyReviewDate,
          },
        });

        break;

      case "NORMAL":
        const normalReviewDate = nextReviewDate.setDate(nextReviewDate.getDate() + 2);

        await this.db.word.updateMany({
          where: {
            difficulty: {
              contains: "NORMAL",
            },
          },
          data: {
            nextReviewDate: normalReviewDate,
          },
        });

        break;

      case "HARD":
        const hardReviewDate = nextReviewDate.setDate(nextReviewDate.getDate() + 1);

        await this.db.word.updateMany({
          where: {
            difficulty: {
              contains: "HARD",
            },
          },
          data: {
            nextReviewDate: hardReviewDate,
          },
        });

        break;

      case "INITIAL":

        const initialReviewDate = nextReviewDate.setDate( nextReviewDate.getDate() + 1);

        await this.db.word.updateMany({
          where: {
            difficulty:  "INITIAL",
          },
          data: {
            nextReviewDate: initialReviewDate,
          },
        });

        break;
    }
   }
  }
}

module.exports = WordRepository;