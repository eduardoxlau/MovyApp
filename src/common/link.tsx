/* eslint-disable no-restricted-globals */
import { onError } from '@apollo/client/link/error';
import { createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { getAccessToken, signOut } from 'storage';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL,
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      if (error?.extensions?.code === 'UNAUTHENTICATED') {
        signOut();
        location.href = '/';
      }
      return forward(operation);
    });
  }
});

export default from([errorLink, authLink, httpLink]);
