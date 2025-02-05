import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  // uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});
