import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '@/theme/index';
import Home from '@/screens/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
