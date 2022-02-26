import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Favorites from '@/screens/Favorites';
import Home from '@/screens/Home';
import Pokeball from '@/assets/images/pokeball.svg';

const {Navigator, Screen} = createBottomTabNavigator();

const PokemonTabRoutes: React.FC = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.TITLE,
        tabBarInactiveTintColor: theme.COLORS.TITLE_LIGHT,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.COLORS.TEXT_LIGHT,
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Screen
        name="My Pokemons"
        component={Favorites}
        options={{
          tabBarIcon: ({color}) => (
            <Pokeball width={24} height={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default PokemonTabRoutes;
