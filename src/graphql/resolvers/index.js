const usersQueries = require('./users')
const articlesQueries = require('./articles')

module.exports = {
    Query: {
        ...usersQueries.Query,
        // articles: () => Articles.getAllArticles()
    },
    Mutation: {
        ...usersQueries.Mutation,
        // newArticle: (parent, args) => {
        //     return Articles.createArticle(args);
        // }
    }
}