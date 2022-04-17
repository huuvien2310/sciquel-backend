const Database = require("../utils/database.js");

class Articles {
  static async getAllArticles() {
    const articlesCollection = await getArticlesCollection();
    const articles_cursor = articlesCollection.find();
    let articles = await articles_cursor.toArray();
    return articles;
  }

  //TODO: update Mutation schema in typeDefs
  static createArticle(args) {
    const article = {
      ArticleID: args.ArticleID,
      AuthorID: args.AuthorID,
      AuthorName: args.AuthorName,
      ArticleType: args.ArticleType,
      ArticleTitle: args.ArticleTitle,
      ArticleContent: args.ArticleContent,
      PreviousVersions: args.PreviousVersions,
      ArticleSummary: args.ArticleSummary,
      LanguageOptions: args.LanguageOptions,
      ArticleFormat: args.ArticleFormat,
      ArticleMedia: args.ArticleMedia,
      Tags: args.Tags,
      CreatedDate: args.CreatedDate,
      Section: args.Section,
      Published: args.Published,
      PublishedDate: args.PublishedDate,
      LastUpdated: args.LastUpdated,
      Definitions: [],
      RelatedContent: args.RelatedContent,
      Quiz: args.Quiz,
    };
    Articles.create(article);
    return article;
  }

  static async create(articleData) {
    const articlesCollection = await getArticlesCollection();
    const result = await articlesCollection.insertOne(articleData);
    return result;
  }
}

async function getArticlesCollection() {
  const database = await Database.get();
  return database.db("sciQuel").collection("articles");
}

module.exports = Articles;
