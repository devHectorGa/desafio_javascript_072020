import React, { Fragment } from 'react';

import ChatMessages from '../chatMessages/chatMessages.component';
import ChatSubmit from '../chatSubmit/chatSubmit.component';
import { ChatContainer } from './chat.styles';

export default () => (
  <ChatContainer>
    <ChatMessages />
    <ChatSubmit />
  </ChatContainer>
);
