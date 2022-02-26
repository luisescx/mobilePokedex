import React from 'react';

import {Separator, Title} from './styles';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  isActive: boolean;
}

const DetailContentButton: React.FC<Props> = ({title, isActive, ...rest}) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <Title isActive={isActive}>{title}</Title>
      <Separator isActive={isActive} />
    </TouchableOpacity>
  );
};

export default DetailContentButton;
