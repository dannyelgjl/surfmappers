import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  height: 260px;
  margin: 10px 0 8px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
`;

export const ImageFeed = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const ContentContainer = styled.View`
  padding: 6px 2px;
`;

export const Location = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #0e89ff;
`;

export const Schedule = styled.Text`
  font-size: 15px;
  color: #414141;
`;

export const ContainerMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 0;
`;