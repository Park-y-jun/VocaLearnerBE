const { BadRequest, Unauthorized, Forbidden, NotFound} = require("../errors/index");
const ListRepository = require("../repositories/listRepository");

class ListService {
  constructor() {
    this.repository = new ListRepository();
  }

  async createList(user_key, name) {
    try {
      await this.repository.createList(user_key, name);
    } catch (err) {
      throw err;
    }
  }

  async userHasList(user_key) {
    const listOwner = await this.repository.listOwnerCheck(user_key);

    if (listOwner === null) {
      throw new BadRequest("A person who does not have a list.");
    }
  }

 async getList(user_key) {
  const lists = await this.repository.getList(user_key);

  return lists;
  }
}

module.exports = ListService;