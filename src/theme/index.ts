export default {
  COLORS: {
    BACKGROUND: '#F5FBFB',
    SHAPE: '#EBF3F5',

    TEXT_DARK: '#787994',
    TEXT_LIGHT: '#FAFBFB',
    TITLE: '#2E3057',
    TITLE_LIGHT: `${'rgba(46, 48, 87, 0.5)'}`,
    TITLE_LIGHT_SECONDARY: `${'rgba(46, 48, 87, 0.3)'}`,

    SUCCESS: '#12A454',
    SUCCESS_LIGHT: `${'rgba(18, 164, 84, 0.3)'}`,

    DANGER: '#E83F5B',
    DANGER_LIGHT: `${'rgba(232, 63, 91, 0.3)'}`,

    SKELETON: '#C4D1D5',
    SKELETON_FOREGROUND: '#E3EEF1',

    POKEMON_TYPES: {
      ROCK: '#C1B474',
      ROCK_ALT: '#C8B686',
      STEEL: '#7F7FD7',
      STEEL_ALT: '#5A8EA2',
      WATER: '#ACC2F2',
      WATER_ALT: '#3692DC',
      BUG: '#B9C657',
      BUG_ALT: '#83C300',
      DARK: '#947029',
      DARK_ALT: '#5B5466',
      DRAGON: '#A481FD',
      DRAGON_ALT: '#006FC9',
      ELECTRIC: '#F9DF77',
      ELECTRIC_ALT: '#FBD100',
      FAIRY: '#D685AD',
      FAIRY_ALT: '#FB89EB',
      FIGHTING: '#CC6B68',
      FIGHTING_ALT: '#E0306A',
      FIRE: '#F0AC78',
      FIRE_ALT: '#FF9741',
      FLYING: '#E1D9F4',
      FLYING_ALT: '#89AAE3',
      GHOST: '#9C94A8',
      GHOST_ALT: '#4C6AB2',
      GRASS: '#91E38F',
      GRASS_ALT: '#38BF4B',
      GROUND: '#E8D7AE',
      GROUND_ALT: '#E87236',
      ICE: '#96D9D6',
      ICE_ALT: '#4CD1C0',
      NORMAL: '#B7B54F',
      NORMAL_ALT: '#919AA2',
      POISON: '#B379B2',
      POISON_ALT: '#B567CE',
      PSYCHIC: '#FBA0BC',
      PSYCHIC_ALT: '#FF6675',
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
