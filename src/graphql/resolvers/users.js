const Users = require('../../models/users.js')

module.exports = {
    Query: {
        users: () => Users.getAllUsers()
    },
    Mutation: {
        newUser: (parent, args) => {
            return Users.createUser(args);
        }
    }
}