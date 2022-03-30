const Database = require('../utils/database.js')

class Users{
    static async getAllUsers() {
        const usersCollection = await getUsersCollection();
        const users_cursor = usersCollection.find();
        let users = await users_cursor.toArray();
        return users;
    }

    static createUser(args) {
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
        Users.create(user);
        return user;
    }

    static async create(userData) {
        const usersCollection = await getUsersCollection();
        const result = await usersCollection.insertOne(userData);
        return result;
    }
}

async function getUsersCollection() {
    const database = await Database.get();
    return database.db("sciQuel").collection("users");
}

module.exports = Users;