const { ApolloServer } = require('apollo-server')

const typeDefs = `
type Query {
  totalPhotos: Int!
}

type Mutation {
  postPhoto(name: String! description: String): Boolean!
}
`
// 1. A data type to store photos in memory
var photos = []

const resolvers = {
  Query: {
    // 2. Return the lenght of the array
    totalPhotos: () => photos.length
  },

  // 3. Mutation and postPhoto resolver
Mutation: {
  postPhoto(parent, args) {
    photos.push(args)
    return true
  }
}
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
.listen()
.then(({url}) => console.log(`GraphQL Service is running on ${url}`))

// npm start => the GraphQL Playground now at http://localhost:4000

// 4 . Test Mutation
// mutation newPhoto($name:String!, $description: String){
//   postPhoto(name:$name, description:$description)
// }
// Add Query Variables
// {
//   "name": "test name",
//   "description": "A sample"
// }
