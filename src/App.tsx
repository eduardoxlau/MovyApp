import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import Home from 'views/home';
import Login from 'views/login';
import link from 'common/link';
import Movies from 'views/movies';
import MyList from 'views/myList';
import Menu from 'components/menu';
import Trailer from 'views/trailer';
import Profile from 'views/profile';
import Footer from 'components/footer';
import ProtectedRoute from 'common/protectedRoute';
import { AppContextProvider } from 'storage/context';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL,
  cache: new InMemoryCache(),
  link,
});

const App = () => (
  <AppContextProvider>
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
  </AppContextProvider>
);

export default App;
