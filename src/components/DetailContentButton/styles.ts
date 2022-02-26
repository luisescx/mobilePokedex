import styled from 'styled-components/native';

interface Props {
  isActive: boolean;
}

export const Title = styled.Text<Props>`
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme, isActive}) =>
    isActive ? theme.COLORS.TITLE : theme.COLORS.TITLE_LIGHT_SECONDARY};
`;

export const Separator = styled.View<Props>`
  margin-top: 12px;
  border-width: 1px;
  border-color: ${({theme, isActive}) =>
    isActive ? theme.COLORS.TITLE : theme.COLORS.TITLE_LIGHT_SECONDARY}; ;
`;
