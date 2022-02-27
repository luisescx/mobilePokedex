import React from 'react';
import {Container, Title, ErrorImage, SubTitle} from './styles';

interface Props {
  hideImage?: boolean;
}

const ErrorHandler: React.FC<Props> = ({hideImage}) => {
  return (
    <Container hideImage={hideImage}>
      <Title>Error</Title>
      <SubTitle>
        An error ocurred while{'\n'}fetching data from the API,{'\n'}please try
        again later.
      </SubTitle>

      {!hideImage && (
        <ErrorImage source={require('../../assets/images/errorImage.png')} />
      )}
    </Container>
  );
};

export default ErrorHandler;
