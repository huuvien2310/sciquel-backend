const Definitions = require("../../models/definitions.js");

module.exports = {
  Query: {
    definitions: () => Definitions.getAllDefinitions(),
  },
  Mutation: {
    newDefinition: (parent, args) => {
      return Definitions.createDefinition(args);
    },
  },
};
