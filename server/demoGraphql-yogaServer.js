const {GraphQLServer} = require("graphql-yoga");

const typeDefs = `
  type Query {
     hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context, info) => "Hello from Graphql-yoga"}
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start(); // defaults to port 4000
