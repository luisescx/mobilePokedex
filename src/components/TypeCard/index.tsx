import React from 'react';
import TypeImage from '../TypeImage';

import {Container, CardName, Name} from './styles';

interface Props {
  name: string;
  isLastIndex: boolean;
}

const TypeCard: React.FC<Props> = ({name, isLastIndex}) => {
  return (
    <Container isLastIndex={isLastIndex} type={name}>
      <TypeImage typeName={name} size={25} />

      <CardName>
        <Name>{name}</Name>
      </CardName>
    </Container>
  );
};

export default TypeCard;
