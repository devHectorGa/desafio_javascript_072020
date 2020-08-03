import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, cancel } from 'redux-saga/effects';

import ChatActionsType from './chat.types';

function connect() {
  const socket = io(
    process.env.NODE_ENV !== 'production'
      ? `http://localhost:5000/socket`
      : `https://simple-chat-devhectorga.herokuapp.com/socket`
  );
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('users.login', ({ username }) => {
      emit();
      // TODO: Config Emit
    });
    socket.on('users.logout', ({ username }) => {
      emit();
      // TODO
    });
    socket.on('messages.new', ({ message }) => {
      emit();
      // TODO
    });
    socket.on('disconnect', (e) => {
      // TODO: handle
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take();
    socket.emit('message', payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  // while (true) {
  //   let { payload } = yield take();
  //   const socket = yield call(connect);
  //   socket.emit('login', { username: payload.username });
  //   const task = yield fork(handleIO, socket);
  //   let action = yield take(`${logout}`);
  //   yield cancel(task);
  //   socket.emit('logout');
  // }
}

export function* chatSagas() {
  yield all([fork(flow)]);
}
