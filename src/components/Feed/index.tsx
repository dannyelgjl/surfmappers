
import React from 'react';
import { FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


import { Container, ImageFeed, ContentContainer, Location, Schedule, Teste } from './styles';

interface DataFeedProps {
  data: {
    id: number;
    location: string;
    schedule: string;
    postImage: string;
  }[];
}

const Feed: React.FC<DataFeedProps> = ({ data }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Container>
          <ContentContainer>
            <Location>
              {item.location}
            </Location>

            <Teste>
              <Schedule>
                {item.schedule}
              </Schedule>
              <Entypo name="dots-three-vertical" size={20} />
            </Teste>

          </ContentContainer>
          <ImageFeed source={item.postImage} />
        </Container>
      )}
    />
  );
}

export default Feed;