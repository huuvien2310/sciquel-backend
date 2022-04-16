const usersQueries = require('./users')
const articlesQueries = require('./articles')

module.exports = {
    Query: {
        ...usersQueries.Query,
        ...articlesQueries.Query
    },
    Mutation: {
        ...usersQueries.Mutation,
        ...articlesQueries.Mutation
    }
}