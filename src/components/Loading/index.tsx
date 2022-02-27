import React, {useMemo} from 'react';
import LottieView from 'lottie-react-native';
import {Container} from './styles';

interface Props {
  isLoading: boolean;
  height?: number;
}

const Loading: React.FC<Props> = ({isLoading, height}) => {
  const heightValue = useMemo(() => {
    return height ? height : 40;
  }, [height]);

  if (!isLoading) {
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
          height: heightValue,
        }}
      />
    </Container>
  );
};

export default Loading;
