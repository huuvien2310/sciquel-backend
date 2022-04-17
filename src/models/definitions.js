const Database = require("../utils/database.js");

class Definitions {
  static async getAllDefinitions() {
    const definitionsCollection = await getDefinitionsCollection();
    const definitions_cursor = definitionsCollection.find();
    let definitions = await definitions_cursor.toArray();
    return definitions;
  }

  static createDefinition(args) {
    const definition = {
      Term: args.Term,
      Definition: args.Definition,
      Context: args.Context,
      ArticleID: args.ArticleID,
    };
    Definitions.create(definition);
    Definitions.insertDefinitionToArticle(definition);
    return definition;
  }

  static async create(definitionData) {
    const definitionsCollection = await getDefinitionsCollection();
    const result = await definitionsCollection.insertOne(definitionData);
    return result;
  }

  static async insertDefinitionToArticle(definitionData) {
    const articlesCollection = await getArticlesCollection();

    const result = await articlesCollection.findByIdAndUpdate(
      definitionData.ArticleID,
      {
        $push: {
          Definitions: {
            _id: definitionData._id,
            Term: definitionData.Term,
            Definition: definitionData.Definition,
            Context: definitionData.Context,
          },
        },
      },
      { new: true, useFindAndModify: false }
    );
    return result;
  }
}

async function getDefinitionsCollection() {
  const database = await Database.get();
  return database.db("sciQuel").collection("definitions");
}

async function getArticlesCollection() {
  const database = await Database.get();
  return database.db("sciQuel").collection("articles");
}

module.exports = Definitions;
