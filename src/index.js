const { ApolloServer, PubSub } = require("apollo-server");
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers');
const {makeExecutableSchema} = require('@graphql-tools/schema');

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

const server = new ApolloServer(schema);

server.listen().then(({ url }) => {
    console.log(`📚 SciQuel server ready at ${url}`);
});