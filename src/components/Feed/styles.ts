import styled from 'styled-components/native';
import { mvs, s } from 'react-native-size-matters';
import { theme } from '../../styles/colors/theme';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  height: ${mvs(260)}px ;
  margin: ${mvs(10)}px 0 ${mvs(8)}px 0;
  border-radius: ${mvs(10)}px;
  overflow: hidden;
  background-color: ${theme.colors.white};
`;

export const ImageFeed = styled.Image`
  width: 100%;
  height: ${mvs(200)}px;
  border-radius: ${mvs(10)}px;
`;

export const ContentContainer = styled.View`
  padding: ${mvs(6)}px ${mvs(2)}px;
`;

export const Location = styled.Text`
  font-size: ${s(14)}px;
  font-weight: bold;
  color: ${theme.colors.defaultBlue};
`;

export const Schedule = styled.Text`
  font-size: ${s(12)}px;
  color: ${theme.colors.gray2};
`;

export const ContainerMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${mvs(4)}px 0;
`;