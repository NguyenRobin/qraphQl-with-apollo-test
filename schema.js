// type we mostly will use: int, float string, boolean, ID. adding a ! is saying "this property is required and cant be null"

export const typeDefs = `#graphql
type Game {
  id: ID!, 
  title: String!,
  platform: [String!]!
  reviews: [Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game! 
    author: Author!
  }
  
type Author {
      id: ID!
      name: String!
      verified: Boolean!
      reviews: [Review!]
    }
    # the type Query is needed i every graphql schema. Its job i to define the ENTRY points to the graph and specify the return types of those entry points. So if we dont define it here. The client wont be able to access that entity. 
type Query {
      games: [Game] #array of data 
      game(id: ID!): Game

      reviews: [Review]
      review(id: ID!): Review # step 1) Makes it possible for client to get a single review, step 2) make a resolver function.

      authors: [Author]
      author(id: ID!): Author
    }

type Mutation {
  deleteGame(id: ID!): [Game]
}
`;
