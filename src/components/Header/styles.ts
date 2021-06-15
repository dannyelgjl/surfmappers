import styled from 'styled-components/native';

interface StylesProps {
  space?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 180px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity<StylesProps>`
  margin-right: ${({ space }) => space ? "28px" : "0"};
`;
