import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://swiftpwa-be.testingnow.me/graphql',
  cache: new InMemoryCache(),
});