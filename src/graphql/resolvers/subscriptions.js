const Subscriptions = require("../../models/subscriptions.js");

module.exports = {
  Query: {
    subscriptions: () => Subscriptions.getAllSubscriptions(),
  },
  Mutation: {
    newSubscription: (parent, args) => {
      return Subscriptions.createSubscription(args);
    },
  },
};
