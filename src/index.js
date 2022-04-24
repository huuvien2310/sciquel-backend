const { ApolloServer, PubSub } = require("apollo-server");
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`📚 SciQuel server ready at ${url}`);
});