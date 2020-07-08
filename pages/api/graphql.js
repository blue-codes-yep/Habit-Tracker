import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    sayHello: String
}
`

const resolvers = {
  Query: {
    sayHello: () => {
      return 'Better Habits Better Life!'
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: "/api/graphql" })