import styled from 'styled-components';

export const ChatContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  font-size: 1em;
  padding: 5%;
  background: #eee;
  background-size: cover;
  text-align: center;
  overflow: auto;
  & > * {
    display: block;
    margin: 0;
    padding: 0;
  }
`;

export const ChatUnorderedList = styled.ul``;

export const ChatItem = styled.li`
  z-index: 1;
  border-radius: 2px;
  overflow: hidden;
  padding: 0px 10px 5px;
  text-align: left;
  display: block;
  position: relative;
  font-size: 13px;
  margin: 3px 0em;
  & p {
  }
`;

export const ChatOtherUser = styled.p`
  max-width: 400px;
  min-width: 100px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  display: inline-block;
  background: #fff;
  border-radius: 7.5px;
  padding: 0.5em 0.5em 0.5em 1em;
  & > * {
    position: relative;
    z-index: 3;
  }

  &::before {
    height: 10px;
    width: 0px;
    background: transparent;
    top: 0px;
    border: 12px solid #fff;
    border-left: 12px solid transparent;
    border-bottom: none;
    border-radius: 2px;
    left: -12px;
    position: absolute;
    z-index: 2;
    content: '';
    display: block;
  }

  &::after {
    height: 1px;
    width: 25px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    top: 10px;
    transform: rotate(47deg);
    z-index: -1;
    position: absolute;
    left: -13px;
    content: '';
    display: block;
  }
`;

export const ChatUser = styled.p`
  max-width: 400px;
  float: right;
  text-decoration: none;
  min-width: 100px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  display: inline-block;
  background: rgb(220, 248, 198);
  border-radius: 7.5px;
  padding: 0.5em 0.5em 0.5em 1em;
  & > * {
    position: relative;
    z-index: 3;
  }

  &::before {
    height: 20px;
    width: 40px;
    background: transparent;
    top: 0px;
    border: 12px solid rgb(220, 248, 198);
    border-right: 12px solid transparent;
    border-bottom: none;
    border-radius: 2px;
    right: -12px;
    position: absolute;
    z-index: 2;
    content: '';
    display: block;
  }

  &::after {
    height: 1px;
    width: 25px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    top: 10px;
    transform: rotate(-47deg);
    z-index: -1;
    position: absolute;
    right: -13px;
    content: '';
    display: block;
  }
`;

export const Username = styled.b`
  font-size: 0.7em;
  font-weight: normal;
  color: rgba(32, 32, 50, 0.618);
`;

export const Message = styled.span`
  line-height: 1.3;
  padding: 0.2em 3em 0 0;
  font-weight: normal;
  display: block;
`;

export const DateContainer = styled.em`
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
  opacity: 0.5;
  font-size: 0.7em;
  font-style: normal;
  float: right;
`;
