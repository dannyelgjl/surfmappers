import React, { useState } from 'react';
import { Header, Stories, Title, InputForm, Feed } from '../../components';
import { STRINGS } from './strings';
import { dataStories } from '../../services/stories';
import { dataFeed } from '../../services/feed';

import { Container, Content } from './styles';

interface Surf {
  id: number;
  location: string;
  schedule: string;
  postImage: string;
}

const Home: React.FC = () => {
  const [teste, setTeste] = useState<Surf[]>([]);

  console.log('teste1:', teste);
  console.log('teste:', teste);
  console.log(dataFeed.length);

  const handleAddSurf = (newSurf: string) => {
    const data = {
      id: new Date().getTime(),
      location: newSurf,
      schedule: 'Sábado, 17 abril 2021 - 07 às 10h',
      postImage: 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/8635.jpg',
    }
    console.log('data:', data);


    setTeste(dataFeed);
    setTeste([...dataFeed, data]);

    console.log('new surf', newSurf);
  }

  return (
    <Container>
      <Header />
      <Stories data={dataStories} />
      <Content>
        <Title title={STRINGS.TITLE} titleBold={STRINGS.TITLE_BOLD} />
        <InputForm
          addSurf={handleAddSurf}
          placeholder={STRINGS.PLACE_HOLDER}
        />
        <Feed data={dataFeed} />
      </Content>
    </Container>
  );
}

export default Home;