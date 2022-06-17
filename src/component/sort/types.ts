import { ActiveItemSortModalType } from 'component/sort/modal/types';

export type SortPropsType = {
  itemSortValue: number;
  setItemSortValue: (activeItemSort: number) => void;
  itemSortModal: ActiveItemSortModalType;
  setItemSortModal: (itemSortModal: ActiveItemSortModalType) => void;
};
