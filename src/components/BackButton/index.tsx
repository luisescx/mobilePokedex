import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const BackButton = ({...rest}: TouchableOpacityProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <Icon name="chevron-left" size={28} color={theme.COLORS.SHAPE} />
    </TouchableOpacity>
  );
};
