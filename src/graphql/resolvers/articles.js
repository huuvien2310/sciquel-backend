const Articles = require('../../models/articles.js')

module.exports = {
    Query: {
        articles: () => Articles.getAllArticles()
    },
    Mutation: {
        newArticle: (parent, args) => {
            return Articles.createArticle(args);
        }
    }
}