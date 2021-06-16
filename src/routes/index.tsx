import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from './constants/route-name';
import { ICONS } from './constants/icons-name';
import { LABEL } from './constants/label-name';
import { theme } from '../styles/colors/theme';
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
        activeTintColor: `${theme.colors.defaultBlue}`,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: `${LABEL.HOME}`,
          tabBarIcon: () => (
            <AntDesign name={ICONS.HOME} color={theme.colors.defaultBlue} size={20} />
          ),
        }}
        name={SCREENS.HOME}
        component={Home} />

      <Tab.Screen
        options={{
          tabBarLabel: `${LABEL.EXPLORE}`,
          tabBarIcon: () => (
            <AntDesign name={ICONS.SEARCH} color={theme.colors.defaultBlue} size={20} />
          ),
        }}
        name={SCREENS.EXPLORE}
        component={Explore} />

      <Tab.Screen
        options={{
          tabBarLabel: `${LABEL.CHECKIN}`,
          tabBarIcon: () => (
            <Feather name={ICONS.MAP_PIN} color={theme.colors.defaultBlue} size={20} />
          ),
        }}
        name={SCREENS.NOTIFICATION}
        component={Notification} />

      <Tab.Screen
        options={{
          tabBarLabel: `${LABEL.NOTIFICATION}`,
          tabBarIcon: () => (
            <MaterialIcons name={ICONS.NOTIFICATION} color={theme.colors.defaultBlue} size={20} />
          ),
        }}
        name={SCREENS.CHECKING}
        component={Checking} />

      <Tab.Screen
        options={{
          tabBarLabel: `${LABEL.PROFILE}`,
          tabBarIcon: () => (
            <Feather name={ICONS.USERS} color={theme.colors.defaultBlue} size={20} />
          ),
        }}
        name={SCREENS.PROFILE}
        component={Profile} />
    </Tab.Navigator>
  );
}