import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import { selectDirectorySectionsToNav } from '../../redux/directory/directory.selectors';

const Header = ({ sections }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      {sections.map((directory) => (
        <OptionLink key={directory.id} to={`${directory.linkUrl}`}>
          {directory.title}
        </OptionLink>
      ))}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySectionsToNav,
});

export default connect(mapStateToProps)(Header);
