import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-between;
  height: 260px;
  margin: 30px 0 8px 0;
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
  font-size: 18px;
  font-weight: bold;
  color: #3a86ff;
`;

export const Schedule = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const Teste = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;