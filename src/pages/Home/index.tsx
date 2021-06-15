import React from 'react';
import { Header, Stories, Title, InputForm } from '../../components';
import surfImage from '../../assets/images/surf1.jpeg'

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const data = [
    {
      id: 1,
      image: surfImage,
      name: 'danielgjl'
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
      <Header />
      <Stories data={data} />
      <Content>
        <Title title="Onde você" titleBold="surfou hoje?" />
        <InputForm />
      </Content>
    </Container>
  );
}

export default Home;