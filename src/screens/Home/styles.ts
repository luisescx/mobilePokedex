import styled from 'styled-components/native';
import Pokeball from '@/assets/images/pokeball.svg';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 12px 0px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: ${getBottomSpace()}px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 32px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-size: 16px;
`;

export const PokeballImage = styled(Pokeball)`
  position: absolute;
  top: -90px;
  left: 150px;
  right: 0;
  bottom: 0;

  color: ${({theme}) => theme.COLORS.SHAPE};
`;

export const SyncButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  bottom: 20px;
  right: 26px;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.TITLE};
`;

export const SyncIcon = styled(Icon)`
  color: ${({theme}) => theme.COLORS.SHAPE};
`;
