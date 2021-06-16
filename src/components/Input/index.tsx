import React, { useState } from 'react';
import { InputProps } from './types';
import { InputContainer, Input } from './styles';

const InputForm: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  const [surf, setSurf] = useState('');

  return (
    <InputContainer>
      <Input
        {...rest}
        returnKeyType="send"
        placeholder={placeholder}
        placeholderTextColor="#707070"
        value={surf}
        onChangeText={setSurf}
      />
    </InputContainer>
  );
}

export default InputForm;