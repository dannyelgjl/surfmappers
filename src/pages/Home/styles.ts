import styled from 'styled-components/native';
import { mvs } from 'react-native-size-matters';
import { theme } from '../../styles/colors/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding-horizontal: ${mvs(20)}px;
`;
