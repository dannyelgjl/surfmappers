import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from './constants/route-name';
import { Home, Explore, Checking, Notification, Profile } from '../pages';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      tabBarOptions={{
        activeTintColor: '#0e89ff'
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <AntDesign name="home" color="#0e89ff" size={20} />
          ),
        }}
        name={SCREENS.HOME}
        component={Home} />

      <Tab.Screen
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: () => (
            <AntDesign name="search1" color="#0e89ff" size={20} />
          ),
        }}
        name={SCREENS.EXPLORE}
        component={Explore} />

      <Tab.Screen
        options={{
          tabBarLabel: 'Checkin',
          tabBarIcon: () => (
            <Feather name="map-pin" color="#0e89ff" size={20} />
          ),
        }}
        name={SCREENS.NOTIFICATION}
        component={Notification} />

      <Tab.Screen
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: () => (
            <MaterialIcons name="notifications-none" color="#0e89ff" size={20} />
          ),
        }}
        name={SCREENS.CHECKING}
        component={Checking} />

      <Tab.Screen
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => (
            <Feather name="users" color="#0e89ff" size={20} />
          ),
        }}
        name={SCREENS.PROFILE}
        component={Profile} />
    </Tab.Navigator>
  );
}