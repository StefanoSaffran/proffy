import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

import { useTheme } from '../hooks/theme';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();
  return (
    <Navigator
      initialRouteName="TeacherList"
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 84 : 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Linha modificada
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 24 : 20, // Linha modificada
        },
        safeAreaInsets: {
          bottom: 0,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: title === 'light' ? '#fafafc' : '#222',
        activeBackgroundColor: title === 'light' ? '#ebebf5' : '#333',
        inactiveTintColor: title === 'light' ? '#c1bccc' : '#444',
        activeTintColor: title === 'light' ? '#32264d' : '#fff',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};
export default AppRoutes;
