import React from 'react';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Data } from './types';
import { Container, SurfImage, StoriesContainer, StoriesUserName } from './styles';


const Stories: React.FC<Data> = ({ data }) => {
  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <StoriesContainer
            activeOpacity={0.6}
          >
            <LinearGradient
              colors={index === 0 ? ['#00b4d8', 'white', '#00b4d8', 'white'] : ['#00b4d8', '#00b4d8', '#80ed99', '#52b788']}
              style={{ borderRadius: 70, padding: 2, marginRight: 8 }}
            >
              <SurfImage resizeMode={index === 0 ? 'center' : 'cover'} source={{ uri: item.image }} />
            </LinearGradient>

            <StoriesUserName>{item.name}</StoriesUserName>
          </StoriesContainer>
        )}
      />
    </Container>


  );
}

export default Stories;