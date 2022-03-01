import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '@/theme/index';
import {Routes} from '@/routes';
import {FavoritesProvider} from '@/contexts/FavoritesProvider';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(); //Ignore all log notifications

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </FavoritesProvider>
  );
};

export default App;
