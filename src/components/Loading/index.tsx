import React from 'react';
import LottieView from 'lottie-react-native';
import {Container} from './styles';

interface Props {
  isLoading: boolean;
}

const Loading: React.FC<Props> = ({isLoading: isloading}) => {
  if (!isloading) {
    return null;
  }

  return (
    <Container>
      <LottieView
        source={require('../../assets/animations/pokeballLoading.json')}
        autoPlay
        loop
        resizeMode="contain"
        style={{
          height: 40,
        }}
      />
    </Container>
  );
};

export default Loading;
