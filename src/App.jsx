import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { withAuthentication  } from 'react-aad-msal';
import Guest from './Guest'
import Members from './Members'
import Logout from './Logout';
import { authProvider } from './authProvider';
import { basicReduxStore } from './reduxStore';

const App = () => {
  return (
  <Router>
    <Switch>
        <Route exact path="/" component={Guest} />
        <Route exact path="/members" component={withAuthentication(Members, {provider: authProvider, reduxStore: basicReduxStore})} />
        <Route exact path="/logout" component={Logout} />
    </Switch>
  </Router>
  );
}

export default App;
