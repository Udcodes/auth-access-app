import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './index.scss';
function Signin() {
  return (
    <div className="container">
      <div className="left-side" />
      <main>
        <h1>Sign in</h1>
        <div className="signin-container">
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '24px' }}
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
