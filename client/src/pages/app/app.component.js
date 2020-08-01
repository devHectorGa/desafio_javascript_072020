import React from 'react';

import { AppContainer, VideoContainer, Video } from './app.styles';

import Chat from '../../components/chat/chat.component';

export default () => (
  <AppContainer>
    <VideoContainer>
      <Video
        width="854"
        height="510"
        src="https://www.youtube.com/embed/uQfm6YaJTJI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </VideoContainer>
    <Chat />
  </AppContainer>
);
