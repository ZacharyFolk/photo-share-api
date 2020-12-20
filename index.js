// 1. Require 'apollo-server'
const { ApolloServer } = require('apollo-server')

// define the schema
// When create query must have a matching resolver
const typeDefs = `
type Query {
  totalPhotos: Int!
}
`

// object in resolver must have same typename as object in Schema
const resolvers = {
  Query: {
    totalPhotos: () => 42
  }
}

// 2. Create a new instance of the server.
// 3. Send it an object with typeDefs (the schema) and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// 4. Call listen on the server to launch
server
.listen()
.then(({url}) => console.log(`GraphQL Service is running on ${url}`))

// npm start => the GraphQL Playground now at http://localhost:4000
