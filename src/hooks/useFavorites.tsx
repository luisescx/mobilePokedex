import {useContext} from 'react';

import {FavoritesPokemonContext} from '@/contexts/FavoritesProvider';

function useFavorites() {
  return useContext(FavoritesPokemonContext);
}

export {useFavorites};
