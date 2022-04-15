const { ApolloServer, PubSub } = require("apollo-server");
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers');
// const {makeExecutableSchema} = require('@graphql-tools/schema');

// const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers
// })

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`📚 SciQuel server ready at ${url}`);
});