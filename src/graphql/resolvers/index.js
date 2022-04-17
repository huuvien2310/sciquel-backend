const usersQueries = require("./users");
const articlesQueries = require("./articles");
const subscriptionsQueries = require("./subscriptions");
const definitionsQueries = require("./definitions");

module.exports = {
  Query: {
    ...usersQueries.Query,
    ...articlesQueries.Query,
    ...subscriptionsQueries.Query,
    ...definitionsQueries.Query,
  },
  Mutation: {
    ...usersQueries.Mutation,
    ...articlesQueries.Mutation,
    ...subscriptionsQueries.Mutation,
    ...definitionsQueries.Mutation,
  },
};
