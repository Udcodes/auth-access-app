import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  const { loading } = auth;

  return loading ? (
    <Route {...rest} render={() => <p>Loading...</p>} />
  ) : (
    <Route
      {...rest}
      render={(routeProps) =>
        auth.data ? <Component {...routeProps} /> : <Redirect to="/sign-in" />
      }
    />
  );
};
export default PrivateRoutes;
