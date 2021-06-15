import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Routes from './routes';


const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  </NavigationContainer>
);

export default App;