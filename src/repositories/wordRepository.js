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

    const currentTime = new Date();
    const words = await this.db.word.findMany({
      where: {
        list_key: parseInt(list_key),
        OR: [
          { difficulty: "INITIAL" },
          {
            nextReviewDate: {
              lte: currentTime,
            },
          },
        ],
      },
    });

    return words;
  }

  async modifyDifficulty(list_key, word_number, difficulty) {

    let updateData = {}
    let currentTime = new Date();

    if (difficulty === "EASY") {
      const easyReviewDateUnix = currentTime.setDate( currentTime.getDate() + 3 );

      const easyReviewDate = new Date(easyReviewDateUnix);

      updateData = {
        difficulty: "EASY",
        nextReviewDate: easyReviewDate
      };

    }

    if (difficulty === "NORMAL") {
      const normalReviewDateUnix = currentTime.setDate( currentTime.getDate() + 2 );

      const normalReviewDate = new Date(normalReviewDateUnix);

      updateData = {
        difficulty: "NORMAL",
        nextReviewDate: normalReviewDate,
      };
    }

    if (difficulty === "HARD") {
      const hardReviewDateUnix = currentTime.setDate( currentTime.getDate() + 1 );

      const hardReviewDate = new Date(hardReviewDateUnix);

      updateData = {
        difficulty: "HARD",
        nextReviewDate: hardReviewDate,
      };
    }

      await this.db.word.update({
        where: {
          list_key: parseInt(list_key),
          word_number: parseInt(word_number),
        },
        data: {
          difficulty: updateData.difficulty,
          nextReviewDate: updateData.nextReviewDate
        },
      });
  }

}

module.exports = WordRepository;