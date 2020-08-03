import UserActionTypes from './user.types';

export const usernameSignInStart = (usernameAndPassword) => ({
  type: UserActionTypes.USERNAME_SIGN_IN_START,
  payload: usernameAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = (currentUser) => ({
  type: UserActionTypes.CHECK_USER_SESSION,
  payload: currentUser,
});

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
