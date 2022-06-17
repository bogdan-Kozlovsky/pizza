export type ModalPropsType = {
  itemSortModal: ActiveItemSortModalType;
  setItemSortModal: (sortProperty: ActiveItemSortModalType) => void;
};

export type ActiveItemSortModalType = {
  name: string;
  sortProperty: string;
};
