export type DetailScreenNavigationProps = {
  id: number;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      detailScreen: DetailScreenNavigationProps;
    }
  }
}
