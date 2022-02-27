import {BackButton} from '@/components/BackButton';
import ErrorHandler from '@/components/ErrorHandler';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

import {Container, ErrorContainer} from './styles';

const Error = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle="dark-content"
        backgroundColor={theme.COLORS.BACKGROUND}
      />

      <BackButton onPress={handleGoBack} />

      <ErrorContainer>
        <ErrorHandler />
      </ErrorContainer>
    </Container>
  );
};

export default Error;
