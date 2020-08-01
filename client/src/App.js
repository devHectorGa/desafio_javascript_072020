import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <h1>Hello World</h1>} />
        <Route exact path="/login" render={() => <h1>Login Page</h1>} />
        <Route exact path="/signIn" render={() => <h1>Sign In Page</h1>} />
      </Switch>
    </Fragment>
  );
};

export default App;
