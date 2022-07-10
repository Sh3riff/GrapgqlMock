const { ApolloServer, gql } = require('apollo-server');
const transactions = require('./transactions.js')
const typeDefs = gql`
  type Transaction {
    id: String
    firstName: String
    lastName: String
    card: String
    date: String
  }

  type Query {
    transactions: [Transaction]
  }
`;

const resolvers = {
    Query: {
        transactions: () => transactions,
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });
  
  // The `listen` method launches a web server.
  server.listen({ port: process.env.PORT || 4000 })
        .then(({ url }) => {console.log(`🚀  Server ready at ${url}`)});

        // query {
        //     transactions {
        //         id
        //         firstName
        //         lastName
        //         card
        //         date
                
        //     }
        // }