import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './global.style';
import { selectDirectorySections } from './redux/directory/directory.selectors';

import Header from './components/header/header.component';

const App = ({ sections }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        {sections.map((directory) => (
          <Route
            exact
            key={directory.id}
            path={`${directory.linkUrl}`}
            render={directory.Component}
          />
        ))}
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(App);
