const { ApolloServer, PubSub } = require("apollo-server");
const typeDefs = require('./graphql/typeDefs.js')
const Database = require('./database.js')

async function getAllUsers() {
    const usersCollection = await getUsersCollection();
    const users_cursor = usersCollection.find();
    let users = await users_cursor.toArray();
    return users;
}

async function create(userData) {
    const usersCollection = await getUsersCollection();
    const result = await usersCollection.insertOne(userData);
    return result;
}

const resolvers = {
    Query: {
        users: () => getAllUsers()
    },
    Mutation: {
        newUser: (parent, args) => {
            const user = {
                UserID: args.UserID,
                UserName: args.UserName,
                PasswordHash: args.PasswordHash,
                UserEmail: args.UserEmail,
                UserPhoneNumber: args.UserPhoneNumber,
                Roles: args.Roles,
                UserDescription: args.UserDescription,
                SocialMedia: args.SocialMedia,
                UserImage: args.UserImage,
                Tags: args.Tags,
                ArticleIDs: args.ArticleIDs,
                PodcastIDs: args.PodcastIDs,
                VideoIDs: args.VideoIDs,
                PageBookmarks: args.PageBookmarks,
                TextBookmarks: args.TextBookmarks,
                ImageBookmarks: args.ImageBookmarks,
                PreferredLanguages: args.PreferredLanguages,
                PreferredSectionOrder: args.PreferredSectionOrder
            };
            create(user);
            return user;
        }
    }
}

async function getUsersCollection() {
    const database = await Database.get();
    return database.db("sciQuel").collection("users");
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({ url }) => {
    console.log(`📚 SciQuel server ready at ${url}`);
});