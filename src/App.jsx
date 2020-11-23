import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import HomePage from './components/HomePage';
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={Signin} />
        <PrivateRoutes path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
