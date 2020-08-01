import React from 'react';

import {
  SubmitContainer,
  Form,
  Input,
  ButtonsContainer,
  ButtonSubmit,
  ButtonReset,
} from './chatSubmit.styles';

export default () => (
  <SubmitContainer>
    <Form>
      <Input
        type="search"
        name="d"
        required=""
        placeholder="Escribe para enviar..."
      />
      <ButtonsContainer>
        <ButtonReset type="reset">
          <i className="las la-times"></i>
        </ButtonReset>
        <ButtonSubmit type="submit">
          <i className="las la-paper-plane" />
        </ButtonSubmit>
      </ButtonsContainer>
    </Form>
  </SubmitContainer>
);
