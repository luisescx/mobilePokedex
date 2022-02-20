import React from 'react';

import {Container, Title, SubTitle, NotFoundImage, styles} from './styles';

const NotFoundPokemon = () => {
  return (
    <Container>
      <Title>Not Found</Title>
      <SubTitle>The Pokémon you were{'\n'}looking for was not found</SubTitle>

      <NotFoundImage
        source={require('../../assets/images/notFoundImage.png')}
        style={styles.image}
      />
    </Container>
  );
};

export default NotFoundPokemon;
