import { ActiveItemSortModalType} from 'component/sort/modal/types';

export type ModalItemPropsType = {
  items: Array<ActiveItemSortModalType>;
  onActiveClick: (sortProperty: ActiveItemSortModalType) => void;
  activeItemModal: ActiveItemSortModalType;
  // itemSortModal: ActiveItemModalType;
  // setItemSortModal: (itemSortModal: ActiveItemModalType) => void;

};
