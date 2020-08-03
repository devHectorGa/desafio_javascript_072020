import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './login.styles';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { usernameSignInStart } from '../../redux/user/user.actions';
import { selectIsLoadingUser } from '../../redux/user/user.selectors';

const LoginPage = ({ usernameSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const { username, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    usernameSignInStart(username, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="username"
          type="username"
          label="username"
          value={username}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Login</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingUser,
});

const mapDispatchToProps = (dispatch) => ({
  usernameSignInStart: (username, password) =>
    dispatch(usernameSignInStart({ username, password })),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner
)(LoginPage);
