import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PokemonStackRoutes from './pokemon.stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <PokemonStackRoutes />
    </NavigationContainer>
  );
}
