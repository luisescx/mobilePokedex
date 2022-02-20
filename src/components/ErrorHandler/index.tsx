import React from 'react';
import {Container, Title, ErrorImage, SubTitle} from './styles';

const ErrorHandler: React.FC = () => {
  return (
    <Container>
      <Title>Error</Title>
      <SubTitle>
        An error ocurred while{'\n'}fetching data from the API,{'\n'}please try
        again later.
      </SubTitle>

      <ErrorImage source={require('../../assets/images/errorImage.png')} />
    </Container>
  );
};

export default ErrorHandler;
