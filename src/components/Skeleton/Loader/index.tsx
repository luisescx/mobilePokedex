import React from 'react';
import {Dimensions} from 'react-native';
import {Rect} from 'react-content-loader/native';
import {ContentLoaderStyled} from '../index';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const CARD_WIDTH = (SCREEN_WIDTH - (48 + 16)) / 2;
const SECOND_CARD_STARTS = 24 + CARD_WIDTH + 16;
const RACE_HEIGHT = 250;
const MARGIN = 16;
const SKELETON_HEIGHT = HEIGHT * (65 / 100);

const PokemonCard: React.FC = () => {
  return (
    <ContentLoaderStyled height={SKELETON_HEIGHT} width={SCREEN_WIDTH}>
      <Rect x={24} y={0} height={250} width={CARD_WIDTH} rx={20} ry={20} />
      <Rect
        x={SECOND_CARD_STARTS}
        y={0}
        height={250}
        width={CARD_WIDTH}
        rx={20}
        ry={20}
      />

      <Rect
        x={24}
        y={RACE_HEIGHT + MARGIN}
        height={250}
        width={CARD_WIDTH}
        rx={20}
        ry={20}
      />
      <Rect
        x={SECOND_CARD_STARTS}
        y={RACE_HEIGHT + MARGIN}
        height={250}
        width={CARD_WIDTH}
        rx={20}
        ry={20}
      />

      <Rect
        x={24}
        y={RACE_HEIGHT * 2 + MARGIN * 2}
        height={250}
        width={CARD_WIDTH}
        rx={20}
        ry={20}
      />
      <Rect
        x={SECOND_CARD_STARTS}
        y={RACE_HEIGHT * 2 + MARGIN * 2}
        height={250}
        width={CARD_WIDTH}
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
