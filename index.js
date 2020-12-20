// define the schema
// When create query must have a matching resolver

const typeDefs =
type Query {
  totalPhotos: Int!
}

const resolvers = {
  Query: {
    totalPhotos: () => 42
  }
}

// object in resolver must have same typename as object in Schema
