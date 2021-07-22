import { ReactChild } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import Home from 'views/home';
import Login from 'views/login';
import link from 'graphql/link';
import Movies from 'views/movies';
import MyList from 'views/myList';
import Menu from 'components/menu';
import Trailer from 'views/trailer';
import Profile from 'views/profile';
import Footer from 'components/footer';
import { getAccessToken } from 'storage';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL,
  cache: new InMemoryCache(),
  link,
});

const ProtectedRoute = ({
  children,
  exact,
  path,
  ...rest
}: {
  path: string | string[];
  exact?: boolean;
  children: ReactChild;
}) => {
  if (
    Array.isArray(path) &&
    path.some((item) => item === '/login' || item === '/') &&
    getAccessToken()
  ) {
    return <Redirect to="/home" />;
  }

  return (
    <Route
      path={path}
      {...rest}
      render={() => (getAccessToken() ? children : <Login />)}
    />
  );
};

ProtectedRoute.defaultProps = {
  exact: false,
};

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="flex flex-col h-full">
        <Menu />
        <Switch>
          <ProtectedRoute exact path={['/login', '/']}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute path="/my-list">
            <MyList />
          </ProtectedRoute>
          <ProtectedRoute path="/home">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path="/trailer/:id">
            <Trailer />
          </ProtectedRoute>
          <ProtectedRoute path={['/movies', '/series', '/recently']}>
            <Movies />
          </ProtectedRoute>
        </Switch>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
