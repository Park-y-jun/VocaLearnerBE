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
}

module.exports = WordRepository;