import styled from 'styled-components/native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
//  mvs espacamento e s dimensional
// font's - ms

interface ThemeProps {
  theme: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${mvs(14)}px ${mvs(2)}px ${mvs(20)}px ${mvs(6)}px;
  border-bottom-color: #f3f3f3;
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
  border-radius: 33px;
  height: 65px;
  width: 65px;
`;

export const StoriesUserName = styled.Text`
  font-size: ${ms(12)}px;
  margin-top: ${mvs(12)}px;
`;