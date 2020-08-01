import styled from 'styled-components';
import HeaderBG from '../../assets/header-bg.jpg';

export const HomePageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  color: #666;

  &::before {
    content: '';
    background-image: url(${HeaderBG});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
