import React from 'react';
import {Dimensions} from 'react-native';
import {Rect} from 'react-content-loader/native';
import {ContentLoaderStyled} from '../index';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const RACE_HEIGHT = 250;
const MARGIN = 16;

const SKELETON_HEIGHT = height * (65 / 100);

const PokemonCard: React.FC = () => {
  return (
    <ContentLoaderStyled height={SKELETON_HEIGHT} width={width}>
      <Rect x={24} y={0} height={250} width={'42.50%'} rx={20} ry={20} />
      <Rect x={215} y={0} height={250} width={'42.50%'} rx={20} ry={20} />

      <Rect
        x={24}
        y={RACE_HEIGHT + MARGIN}
        height={250}
        width={'42.50%'}
        rx={20}
        ry={20}
      />
      <Rect
        x={215}
        y={RACE_HEIGHT + MARGIN}
        height={250}
        width={'42.50%'}
        rx={20}
        ry={20}
      />

      <Rect
        x={24}
        y={RACE_HEIGHT * 2 + MARGIN * 2}
        height={250}
        width={'42.50%'}
        rx={20}
        ry={20}
      />
      <Rect
        x={215}
        y={RACE_HEIGHT * 2 + MARGIN * 2}
        height={250}
        width={'42.50%'}
        rx={20}
        ry={20}
      />
    </ContentLoaderStyled>
  );
};

const Loader: React.FC = () => {
  return <PokemonCard />;
};

export default Loader;
