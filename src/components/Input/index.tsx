import React, { useState } from 'react';
import { InputProps } from './types';
import { InputContainer, Input } from './styles';

const InputForm: React.FC<InputProps> = ({ placeholder, addSurf, ...rest }) => {
  const [surf, setSurf] = useState('');

  const handleSurf = () => {
    addSurf(surf);
    setSurf('');
  }
  return (
    <InputContainer>
      <Input
        {...rest}
        returnKeyType="send"
        onSubmitEditing={handleSurf}
        placeholder={placeholder}
        placeholderTextColor="#707070"
        value={surf}
        onChangeText={setSurf}
      />
    </InputContainer>
  );
}

export default InputForm;