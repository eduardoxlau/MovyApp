import { ReactChild } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from 'views/login';
import { getAccessToken } from 'storage';

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

export default ProtectedRoute;
