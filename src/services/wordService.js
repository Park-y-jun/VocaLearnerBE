const WordRepository = require('../repositories/wordRepository')
const { BadRequest, Unauthorized, Forbidden, NotFound} = require("../errors/index");

class WordService {
  constructor() {
    this.repository = new WordRepository();
  }

  async pushWord(list_key, question, answer) {
    await this.repository.pushWord(list_key, question, answer);
  }

  async executeAlgorithm(list_key) {
    await this.repository.executeAlgorithm(list_key);
  }

  async loadWords(list_key) {
    const words = await this.repository.loadWords(list_key);

    if (!words) {
      throw new NotFound(`Can't find words`);
    }
    return words;
  }

  async modifyDifficulty(list_key, word_number, difficulty) {
    await this.repository.modifyDifficulty(list_key, word_number, difficulty);
  }
}

module.exports = WordService;