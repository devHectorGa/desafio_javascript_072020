import styled from 'styled-components';

export const AppContainer = styled.main`
  position: relative;
  padding: 70px 0 10px 0;
  height: 100vh;
  display: grid;
  grid-template-areas: 'video' 'chat';
`;

export const VideoContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  grid-area: video;
`;

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
