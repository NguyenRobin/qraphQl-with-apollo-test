import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "games, authors and reviews" array from db.

/*
Resolvers built in arguments

PARENT: is the result of the previous resolver in the hierarchy. For toplevel request the result will be NULL. 

ARGS: (parameters): is the arguments the client sends in the request. For example ID

CONTEXT: is used to SHARE information between resolvers like for example authentication info or global info.

*/
const resolvers = {
  // The object name don't need to match. But its good to have a similar standard convention.
  Query: {
    // All these function names need to match the type Query from the schema where we declared them.
    games() {
      return db.games;
    },
    game(parent, args, context) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(parent, args, context) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    // we automatically get access to 3 variables in resolver functions.
    review(parent, args, context) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  // Telling apollo how to get a all reviews based on the parent query for a single game.
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((author) => author.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
};

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data
const server = new ApolloServer({
  // typeDefs maps out how the graphql will look like.
  typeDefs,
  // resolvers contains a bunch of resolver function and are there to handle ANY incoming request and return data to the client.
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
