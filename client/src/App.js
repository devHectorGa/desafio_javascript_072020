import React, { Fragment, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './global.style';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import LoginPage from './pages/login/login.component';
import AppPage from './pages/app/app.component';
import RegisterPage from './pages/register/register.component';
import ProfilePage from './pages/profile/profile.component';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/app" /> : <LoginPage />)}
        />
        <Route
          exact
          path="/app"
          render={() => (currentUser ? <AppPage /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/profile"
          render={() =>
            currentUser ? <ProfilePage /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (currentUser) => dispatch(checkUserSession(currentUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
