import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionsTypes from './user.types';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';

export function* signInWithUsername({ payload: { username, password } }) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const url =
    process.env.NODE_ENV !== 'production'
      ? `http://localhost:5000`
      : `https://simple-chat-devhectorga.herokuapp.com/`;
  const raw = JSON.stringify({
    username,
    password,
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  try {
    const res = yield call(fetch, `${url}/api/auth/signin`, requestOptions);
    const data = yield res.json();
    yield put(signInSuccess(data));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated({ payload: currentUser }) {}

export function* signOut() {}

export function* signUp({
  payload: { username, email, password, displayName },
}) {}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {}

export function* onUsernameSignInStart() {
  yield takeLatest(UserActionsTypes.USERNAME_SIGN_IN_START, signInWithUsername);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionsTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {}

export function* onSignUpStart() {}

export function* onSignUpSuccess() {}

export function* userSagas() {
  yield all([
    call(onUsernameSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
