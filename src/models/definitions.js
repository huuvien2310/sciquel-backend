const Database = require("../utils/database.js");
const { ObjectId } = require("mongodb");

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

    return Definitions.create(definition).then((definition) => {
      Definitions.insertDefinitionToArticle(definition);
    });
  }

  static async create(definitionData) {
    const definitionsCollection = await getDefinitionsCollection();
    definitionsCollection.insertOne(definitionData);
    return definitionData;
  }

  static async insertDefinitionToArticle(definitionData) {
    const articlesCollection = await getArticlesCollection();
    console.log("Article collection is connected.");

    const result = await articlesCollection.findOneAndUpdate(
      { _id: ObjectId(definitionData.ArticleID) },
      {
        $push: {
          Definitions: {
            _id: definitionData._id,
            Term: definitionData.Term,
            Definition: definitionData.Definition,
            Context: definitionData.Context,
            ArticleID: args.ArticleID,
          },
        },
      },
      { new: true, useFindAndModify: false }
    );
    console.log("Definition is inserted to Article.\n");
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
