import styled from 'styled-components/native';
import { ms, mvs } from 'react-native-size-matters';
import { theme } from '../../styles/colors/theme';

interface ThemeProps {
  theme: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${mvs(14)}px ${mvs(2)}px ${mvs(20)}px ${mvs(6)}px;
  border-bottom-color: ${theme.colors.gray1};
  border-bottom-width: ${mvs(1.7)}px;
`
export const StoriesContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SurfImage = styled.Image`
  align-items: center;
  justify-content: center;
  border-radius: ${mvs(33)}px;
  height: ${mvs(65)}px;
  width: ${mvs(65)}px;
`;

export const StoriesUserName = styled.Text`
  font-size: ${ms(12)}px;
  margin-top: ${mvs(12)}px;
`;