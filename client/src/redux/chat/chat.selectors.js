import { createSelector } from 'reselect';

const selectChats = (state) => state.chats;

export const selectCurrentChat = createSelector(
  [selectChats],
  (chats) => chats
);
