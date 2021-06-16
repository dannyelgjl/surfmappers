import styled from 'styled-components/native';
import { mvs, s } from 'react-native-size-matters';

export const Container = styled.View`
  margin-top: ${mvs(30)}px;
  flex-direction: row;
`;

export const QuestionTitle = styled.Text`
  font-size: ${s(20)}px;
`;

export const QuestionTitleBold = styled.Text`
  font-size: ${s(20)}px;
  font-weight: bold;
  margin-left: ${mvs(6)}px;
`;