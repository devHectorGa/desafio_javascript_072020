import React from 'react';

import {
  ChatContainer,
  ChatUnorderedList,
  ChatItem,
  ChatUser,
  ChatOtherUser,
  Username,
  Message,
  DateContainer,
} from './chatMessages.styles';

export default () => (
  <ChatContainer>
    <ChatUnorderedList>
      <ChatItem>
        <ChatUser>
          <Username>Hector Garzón</Username>
          <Message>¿Cómo estas?</Message>
          <DateContainer>11:37</DateContainer>
        </ChatUser>
      </ChatItem>
      <ChatItem>
        <ChatOtherUser>
          <Username>Andres Guevara</Username>
          <Message>
            Estoy estresado, intento dejar de fumar, pero soy incapaz
          </Message>
          <DateContainer>16:23</DateContainer>
        </ChatOtherUser>
      </ChatItem>
      <ChatItem>
        <ChatUser>
          <Username>Hector Garzón</Username>
          <Message>Hola</Message>
          <DateContainer>16:24</DateContainer>
        </ChatUser>
      </ChatItem>
      <ChatItem>
        <ChatUser>
          <Username>Hector Garzón</Username>
          <Message>Hola</Message>
          <DateContainer>20:44</DateContainer>
        </ChatUser>
      </ChatItem>
      <ChatItem>
        <ChatOtherUser>
          <Username>Santiago</Username>
          <Message>Hector, dejalo en paz</Message>
          <DateContainer>23:00</DateContainer>
        </ChatOtherUser>
      </ChatItem>
    </ChatUnorderedList>
  </ChatContainer>
);
