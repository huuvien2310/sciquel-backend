const usersQueries = require('./users')

module.exports = {
    Query: {
        ...usersQueries.Query
    },
    Mutation: {
        ...usersQueries.Mutation
    }
}