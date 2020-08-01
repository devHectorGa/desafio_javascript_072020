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

export function* signInWithEmail({ payload: { email, password } }) {}

export function* isUserAuthenticated() {}

export function* signOut() {}

export function* signUp({ payload: { email, password, displayName } }) {}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {}

export function* onEmailSignInStart() {}

export function* onCheckUserSession() {}

export function* onSignOutStart() {}

export function* onSignUpStart() {}

export function* onSignUpSuccess() {}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
