import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  position: absolute;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 800px) {
    justify-content: space-between;
    height: 60px;
    padding: 10px;
    /* margin-bottom: 20px; */
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 75px;
  padding: 12px 10px;

  @media screen and (max-width: 800px) {
    padding: 0;
    width: 50px;
  }
`;

export const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 5px;
  cursor: pointer;
`;

export const ButtonLogout = styled.button`
  border: none;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  padding: 0.2rem 0.5rem;

  &:hover {
    background-color: #ccc;
    color: #333;
  }
`;
