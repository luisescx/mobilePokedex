import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Pokeball from '@/assets/images/pokeball-colored.svg';

interface Props extends TouchableOpacityProps {
  isFavorite: boolean;
}

const FavoriteButton: React.FC<Props> = ({isFavorite, ...rest}) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <Pokeball width={32} height={32} opacity={isFavorite ? 1 : 0.5} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
