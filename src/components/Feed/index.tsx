
import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { DataFeedProps } from './types';
import { STRINGS } from './strings';
import { Container, ImageFeed, ContentContainer, Location, Schedule, ContainerMenu } from './styles';


const Feed: React.FC<DataFeedProps> = ({ data }) => {
  return (
    <View style={{ paddingTop: 10 }}>
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

              <ContainerMenu>
                <Schedule>
                  {item.schedule}
                </Schedule>
                <TouchableOpacity>
                  <Entypo name={STRINGS.ICON_MENU} size={20} />
                </TouchableOpacity>
              </ContainerMenu>

            </ContentContainer>
            <ImageFeed source={{ uri: item.postImage }} />
          </Container>
        )}
      />
    </View>

  );
}

export default Feed;