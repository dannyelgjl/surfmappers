import styled from 'styled-components/native';
import { mvs, s } from 'react-native-size-matters';
import { theme } from '../../styles/colors/theme';

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: ${mvs(14)}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: ${mvs(18)}px;
  background-color: ${theme.colors.gray1};
  height: ${mvs(60)}px;
  font-size: ${s(18)}px;
  color: ${theme.colors.black};
  border-radius: ${mvs(10)}px;
`;

