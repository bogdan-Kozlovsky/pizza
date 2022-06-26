import { ActiveItemSortModalType } from 'component/sort/modal/types';

export type ModalItemPropsType = {
  items: Array<ActiveItemSortModalType>;
  setIsVisible: (isVisible: boolean) => void;
  onActiveClick: (sortProperty: ActiveItemSortModalType) => void;
  activeItemModal: ActiveItemSortModalType;
};
