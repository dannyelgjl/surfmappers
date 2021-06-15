import React from 'react';
import logoSurf from '../../assets/images/surf1.jpeg';
import Cart from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import { Container, Logo, IconContainer, IconButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logoSurf} />

      <IconContainer>
        <IconButton space>
          <Entypo name="chat" size={30} />
        </IconButton>
        <IconButton>
          <Cart name="cart-outline" size={30} />

        </IconButton>
      </IconContainer>
    </Container>
  );
}

export default Header;