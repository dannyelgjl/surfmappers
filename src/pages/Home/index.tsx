import React from 'react';
import { Header, Stories, Title, InputForm, Feed } from '../../components';
import { STRINGS } from './strings';
import { dataStories } from '../../services/stories';
import { dataFeed } from '../../services/feed';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  console.log(dataFeed);
  return (
    <Container>
      <Header />
      <Stories data={dataStories} />
      <Content>
        <Title title={STRINGS.TITLE} titleBold={STRINGS.TITLE_BOLD} />
        <InputForm placeholder={STRINGS.PLACE_HOLDER} />
        <Feed data={dataFeed} />
      </Content>
    </Container>
  );
}

export default Home;