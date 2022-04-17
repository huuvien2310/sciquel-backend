const Database = require("../utils/database.js");

class Subscriptions {
  static async getAllSubscriptions() {
    const subscriptionsCollection = await getSubscriptionsCollection();
    const subscriptions_cursor = subscriptionsCollection.find();
    let subscriptions = await subscriptions_cursor.toArray();
    return subscriptions;
  }

  static createSubscription(args) {
    const subscription = {
      Email: args.Email,
    };
    Subscriptions.create(subscription);
    return subscription;
  }

  static async create(subscriptionData) {
    const subscriptionsCollection = await getSubscriptionsCollection();
    const result = await subscriptionsCollection.insertOne(subscriptionData);
    return result;
  }
}

async function getSubscriptionsCollection() {
  const database = await Database.get();
  return database.db("sciQuel").collection("subscriptions");
}

module.exports = Subscriptions;
