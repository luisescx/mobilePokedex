import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '@/theme/index';
import {Routes} from '@/routes';
import {FavoritesProvider} from '@/contexts/FavoritesProvider';

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </FavoritesProvider>
  );
};

export default App;
