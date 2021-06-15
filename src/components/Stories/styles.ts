import styled from 'styled-components/native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
//  mvs espacamento e s dimensional
// font's - ms

export const Container = styled.View`
  width: ${mvs(100)}%;
  padding: ${mvs(14)}px 0 ${mvs(20)}px ${mvs(14)}px;
  border-bottom-color: #ccc;
  border-bottom-width: ${mvs(1)}px;
`
export const StoriesContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`
export const SurfImage = styled.Image`
  align-items: center;
  justify-content: center;
  border-radius: ${mvs(75)}px;
  height: ${mvs(70)}px;
  width: ${mvs(70)}px;
`;

export const StoriesUserName = styled.Text`
  font-size: ${ms(12)}px;
  margin-top: ${mvs(12)}px;
`;