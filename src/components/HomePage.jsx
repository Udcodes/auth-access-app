import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';
import { Button } from '@material-ui/core';
import './index.scss';

const HomePage = () => {
  const { auth, authData } = useContext(authContext);
  const history = useHistory();
  const handleLogout = () => {
    authData(null);
    history.push('/sign-in');
  };
  return (
    <>
      <div className="homepage">
        <h1>Welcome! 🤗✨</h1>
        You are logged into this app with
        <Link to={`mailto:${auth.data.email}`}>{` ${auth.data.email}`}</Link> as your email address.
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '24px', padding: '16px' }}
          onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
    </>
  );
};

export default HomePage;
