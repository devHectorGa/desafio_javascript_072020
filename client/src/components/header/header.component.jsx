import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  ButtonLogout,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { selectDirectorySectionsToNav } from '../../redux/directory/directory.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOut } from '../../redux/user/user.actions';

const Header = ({ sections, currentUser, signOut }) => (
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
      {currentUser ? (
        <ButtonLogout onClick={() => signOut()}>Logout</ButtonLogout>
      ) : null}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySectionsToNav,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
