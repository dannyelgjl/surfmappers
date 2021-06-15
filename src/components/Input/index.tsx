import React from 'react';
import { InputProps } from './types';
import { InputContainer, Input } from './styles';

const InputForm: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <InputContainer>
      <Input
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default InputForm;