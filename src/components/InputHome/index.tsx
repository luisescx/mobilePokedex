import React from 'react';
import {Container, InputButton, InputField, InputIcon} from './styles';

const InputHome = () => {
  return (
    <Container>
      <InputField placeholder="Name or Number" />

      <InputButton>
        <InputIcon name="search" size={20} />
      </InputButton>
    </Container>
  );
};

export default InputHome;
