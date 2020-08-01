import styled, { css } from 'styled-components';

const buttonStyles = css`
  appearance: textfield;
  outline: none;
  resize: vertical;
  line-height: 14px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;

  &:focus,
  &:hover {
    border-color: #000;
  }
  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.06);
  }
`;

export const SubmitContainer = styled.div`
  margin: 5px 20px;
  position: relative;
  background-color: #eee;
`;

export const Form = styled.form``;

export const Input = styled.input`
  appearance: textfield;
  outline: none;
  resize: vertical;
  line-height: 14px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;

  &:hover {
    border-color: #000;
  }
  &:focus {
    border-color: #000;
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.06);
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export const ButtonsContainer = styled.p`
  padding: 0px;
  line-height: 30px;
  position: absolute;
  right: 4px;
  top: 50%;
  margin-top: -15px;
  background: none;
  outline: none;
  border: none;
  height: 30px;
  display: block;
`;

export const ButtonSubmit = styled.button`
  ${buttonStyles}
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  background: #444;
  border-radius: 4px;
  float: right;
  padding: 0;
  line-height: 30px;
  outline: none;
  border: none;
  height: 30px;
  display: block;

  & i {
    font-style: normal;
    font-size: 20px;
    margin: 0px 10px;
    line-height: 30px;
  }
  &:hover {
    background: rgb(113, 125, 213);
    color: #fff;
  }
`;

export const ButtonReset = styled.button`
  ${buttonStyles}
  color: #999;
  cursor: pointer;
  text-transform: uppercase;
  display: none;
  padding: 0px 10px;
  margin-right: 0px;
  line-height: 31px;
  float: left;
  background: none;
  outline: none;
  border: none;
  height: 30px;

  & i {
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
  }
  &:hover {
    color: #444;
  }
`;
