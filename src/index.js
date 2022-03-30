const { ApolloServer, PubSub } = require("apollo-server");
const typeDefs = require('./graphql/typeDefs.js')
const Users = require('./models/users.js')

const resolvers = {
    Query: {
        users: () => Users.getAllUsers()
    },
    Mutation: {
        newUser: (parent, args) => {
            return Users.createUser(args);
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({ url }) => {
    console.log(`📚 SciQuel server ready at ${url}`);
});