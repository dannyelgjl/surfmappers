import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Stories from '../../components/Stories';
import surfImage from '../../assets/images/surf1.jpeg'

import { Container } from './styles';

const Home: React.FC = () => {
  const data = [
    {
      id: 1,
      image: surfImage,
      name: 'daniel',
    },
    {
      id: 2,
      image: surfImage,
      name: 'daniel',
    },
    {
      id: 3,
      image: surfImage,
      name: 'daniel',
    },
    {
      id: 4,
      image: surfImage,
      name: 'daniel',
    },
    {
      id: 5,
      image: surfImage,
      name: 'daniel',
    },
    {
      id: 6,
      image: surfImage,
      name: 'daniel',
    }
  ]

  return (
    <Container>
      <Stories data={data} />
    </Container>
  );
}

export default Home;