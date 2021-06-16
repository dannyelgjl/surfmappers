import styled from 'styled-components/native';
import { mvs } from 'react-native-size-matters';

interface StylesProps {
  space?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${mvs(20)}px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  height: ${mvs(40)}px;
  width: ${mvs(180)}px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity<StylesProps>`
  margin-right: ${({ space }) => space ? `${mvs(28)}px` : "0"};
`;
