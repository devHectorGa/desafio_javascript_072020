import React, { Fragment } from 'react';

import ChatMessages from '../chatMessages/chatMessages.component';
import ChatSubmit from '../chatSubmit/chatSubmit.component';

export default () => (
  <Fragment>
    <ChatMessages />
    <ChatSubmit />
  </Fragment>
);
