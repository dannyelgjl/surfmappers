import React from 'react';
import { TitleProps } from './types';
import { Container, QuestionTitle, QuestionTitleBold } from './styles';

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