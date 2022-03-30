const MongoClient = require("mongodb").MongoClient;

const config = require("./config.js");

class Database {
  static #singleton;

  static async get() {
    if (Database.#singleton === undefined) {
      Database.#singleton = new MongoClient(config.MONGO_URI, { useUnifiedTopology: true });
      await Database.#singleton.connect();
    }
    return Database.#singleton;
  }
}

module.exports = Database;