// type we mostly will use: int, float string, boolean, ID. adding a ! is saying "this property is required and cant be null"

export const typeDefs = `#graphql
type Game {
  id: ID!, 
  title: String!,
  platform: [String!]!
  reviews: [Review!] # this links to the Review type
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game! 
    author: Author! # this links to the Author type
  }
  
type Author {
      id: ID!
      name: String!
      verified: Boolean!
      reviews: [Review!]  # this links to the Author type
    }

# IMPORTANT! this type Query is needed i every graphql schema. Its job i to define the ENTRY points to the graph and specify the return types of those entry points. So if we don't define it here. The client wont be able to access that entity. Now we are making sure that, when we define our resolver object these Queries can be accessible, games(), game(1) etc. 
type Query {
      games: [Game] # array of data 
      game(id: ID!): Game # single data

      reviews: [Review]
      review(id: ID!): Review # step 1) Makes it possible for client to get a single review, step 2) make a resolver function.

      authors: [Author]
      author(id: ID!): Author
    }

type Mutation {
  deleteGame(id: ID!): [Game]
}
`;
