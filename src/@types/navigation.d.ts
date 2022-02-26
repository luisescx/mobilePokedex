import {Pokemon} from '@/common/interface/pokemon';

export type DetailScreenNavigationProps = {
  pokemon: Pokemon;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      detailScreen: DetailScreenNavigationProps;
    }
  }
}
