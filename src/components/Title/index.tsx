import React from 'react';
import { View } from 'react-native';

import { Container, QuestionTitle, QuestionTitleBold } from './styles';

interface TitleProps {
  title: string;
  titleBold: string;
}

const Title: React.FC<TitleProps> = ({ title, titleBold }) => {
  return (
    <Container>
      <QuestionTitle>
        {title}
      </QuestionTitle>
      <QuestionTitleBold>
        {titleBold}
      </QuestionTitleBold>
    </Container>
  );
}

export default Title;