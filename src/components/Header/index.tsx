import React from 'react';
import logoSurf from '../../assets/images/surfmapperslogo.png';
import Cart from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { STRINGS } from './strings';

import { Container, Logo, IconContainer, IconButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logoSurf} />

      <IconContainer>
        <IconButton space>
          <Cart name={STRINGS.ICON_CART} size={30} />
        </IconButton>

        <IconButton>
          <Entypo name={STRINGS.ICON_CHAT} size={30} />
        </IconButton>
      </IconContainer>
    </Container>
  );
}

export default Header;