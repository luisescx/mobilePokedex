import React from 'react';

import Bug from '@/assets/images/pokemonTypes/bug.svg';
import Dark from '@/assets/images/pokemonTypes/dark.svg';
import Dragon from '@/assets/images/pokemonTypes/dragon.svg';
import Electric from '@/assets/images/pokemonTypes/electric.svg';
import Fairy from '@/assets/images/pokemonTypes/fairy.svg';
import Fighting from '@/assets/images/pokemonTypes/fighting.svg';
import Fire from '@/assets/images/pokemonTypes/fire.svg';
import Flying from '@/assets/images/pokemonTypes/flying.svg';
import Ghost from '@/assets/images/pokemonTypes/ghost.svg';
import Grass from '@/assets/images/pokemonTypes/grass.svg';
import Ground from '@/assets/images/pokemonTypes/ground.svg';
import Ice from '@/assets/images/pokemonTypes/ice.svg';
import Normal from '@/assets/images/pokemonTypes/normal.svg';
import Poison from '@/assets/images/pokemonTypes/poison.svg';
import Psychic from '@/assets/images/pokemonTypes/psychic.svg';
import Rock from '@/assets/images/pokemonTypes/rock.svg';
import Steel from '@/assets/images/pokemonTypes/steel.svg';
import Water from '@/assets/images/pokemonTypes/water.svg';
import {StyleSheet} from 'react-native';

interface Props {
  typeName: string;
}

const TypeImage: React.FC<Props> = ({typeName}) => {
  return (
    <>
      {typeName === 'bug' && (
        <Bug width={30} height={30} style={styles.container} />
      )}
      {typeName === 'dark' && (
        <Dark width={30} height={30} style={styles.container} />
      )}
      {typeName === 'dragon' && (
        <Dragon width={30} height={30} style={styles.container} />
      )}
      {typeName === 'electric' && (
        <Electric width={30} height={30} style={styles.container} />
      )}
      {typeName === 'fairy' && (
        <Fairy width={30} height={30} style={styles.container} />
      )}
      {typeName === 'fighting' && (
        <Fighting width={30} height={30} style={styles.container} />
      )}
      {typeName === 'fire' && (
        <Fire width={30} height={30} style={styles.container} />
      )}
      {typeName === 'flying' && (
        <Flying width={30} height={30} style={styles.container} />
      )}
      {typeName === 'ghost' && (
        <Ghost width={30} height={30} style={styles.container} />
      )}
      {typeName === 'grass' && (
        <Grass width={30} height={30} style={styles.container} />
      )}
      {typeName === 'ground' && (
        <Ground width={30} height={30} style={styles.container} />
      )}
      {typeName === 'ice' && (
        <Ice width={30} height={30} style={styles.container} />
      )}
      {typeName === 'normal' && (
        <Normal width={30} height={30} style={styles.container} />
      )}
      {typeName === 'poison' && (
        <Poison width={30} height={30} style={styles.container} />
      )}
      {typeName === 'psychic' && (
        <Psychic width={30} height={30} style={styles.container} />
      )}
      {typeName === 'steel' && (
        <Steel width={30} height={30} style={{marginLeft: 4}} />
      )}
      {typeName === 'water' && (
        <Water width={30} height={30} style={{marginLeft: 4}} />
      )}
      {typeName === 'rock' && (
        <Rock width={30} height={30} style={{marginLeft: 4}} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 4,
  },
});

export default TypeImage;
