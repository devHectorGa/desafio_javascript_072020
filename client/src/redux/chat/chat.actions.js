import ChatActionTypes from './chat.actions';

export const sendMessageStart = (message) => ({
  type: ChatActionTypes.SEND_MESSAGE_START,
  payload: message,
});

export const sendMessageSuccess = () => ({
  type: ChatActionTypes.SEND_MESSAGE_SUCCESS,
});

export const sendMessageFailure = (error) => ({
  type: ChatActionTypes.SEND_MESSAGE_FAILURE,
  payload: error,
});

export const receiveMessageStart = () => ({
  type: ChatActionTypes.RECEIVE_MESSAGES_START,
});

export const receiveMessageSuccess = () => ({
  type: ChatActionTypes.RECEIVE_MESSAGES_SUCCESS,
});

export const receiveMessageFailed = (error) => ({
  type: ChatActionTypes.RECEIVE_MESSAGES_FAILED,
  payload: error,
});
