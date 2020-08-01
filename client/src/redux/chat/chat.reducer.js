import ChatActionTypes from './chat.types';

const INITIAL_STATE = { chats: {}, error: null };

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chatReducer;
