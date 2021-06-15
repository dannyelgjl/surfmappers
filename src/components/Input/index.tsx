import React from 'react';
import { InputContainer, Input } from './styles';

const InputForm: React.FC = () => {
  return (
    <InputContainer>
      <Input
        placeholder="Onde você surfou hoje?"
      />
    </InputContainer>
  );
}

export default InputForm;