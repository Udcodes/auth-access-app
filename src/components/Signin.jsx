import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { authContext } from '../contexts/AuthContext';
import './index.scss';
function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { authData } = useContext(authContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    authData(email, password);
    history.push('/');
  };
  return (
    <div className="container">
      <div className="left-side" />
      <main>
        <h1>Sign in</h1>
        <div className="signin-container">
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '24px', padding: '16px' }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </main>
      <div className="right-side" />
    </div>
  );
}

export default Signin;
