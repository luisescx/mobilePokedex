import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/screens/Home';
import Detail from '@/screens/Detail';

const {Navigator, Screen} = createNativeStackNavigator();

const PokemonStackRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="detailScreen" component={Detail} />
    </Navigator>
  );
};

export default PokemonStackRoutes;
