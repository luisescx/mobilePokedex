export default {
  COLORS: {
    BACKGROUND: '#F5FBFB',
    SHAPE: '#EBF3F5',

    TEXT_DARK: '#787994',
    TEXT_LIGHT: '#FAFBFB',
    TITLE: '#2E3057',
    TITLE_LIGHT: `${'rgba(46, 48, 87, 0.5)'}`,

    SUCCESS: '#12A454',
    SUCCESS_LIGHT: `${'rgba(18, 164, 84, 0.3)'}`,

    DANGER: '#E83F5B',
    DANGER_LIGHT: `${'rgba(232, 63, 91, 0.3)'}`,

    SKELETON: '#C4D1D5',
    SKELETON_FOREGROUND: '#E3EEF1',

    POKEMON_TYPES: {
      ROCK: '#C1B474',
      STEEL: '#7F7FD7',
      WATER: '#ACC2F2',
      BUG: '#B9C657',
      DARK: '#947029',
      DRAGON: '#A481FD',
      ELECTRIC: '#F9DF77',
      FAIRY: '#D685AD',
      FIGHTING: '#CC6B68',
      FIRE: '#F0AC78',
      FLYING: '#E1D9F4',
      GHOST: '#9C94A8',
      GRASS: '#91E38F',
      GROUND: '#E8D7AE',
      ICE: '#96D9D6',
      NORMAL: '#B7B54F',
      POISON: '#B379B2',
      PSYCHIC: '#FBA0BC',
    } as POKEMON_TYPES,
  },

  FONTS: {
    REGULAR: 'Poppins-Regular',
    MEDIUM: 'Poppins-Medium',
    BOLD: 'Poppins-Bold',
  },
};

export interface POKEMON_TYPES {
  [type: string]: string;
}
