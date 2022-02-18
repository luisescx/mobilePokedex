import InputHome from '@/components/InputHome';
import React from 'react';

import {Container, Title, Header, SubTitle} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Pokédex</Title>

        <SubTitle>
          Search for a Pokémon by name or using its National Pokédex number
        </SubTitle>

        <InputHome />
      </Header>
    </Container>
  );
};

export default Home;
