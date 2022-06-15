export type ModalItemPropsType = {
  items: Array<string>;
  onActiveClick: (index: number) => void;
  activeItem: number;
};
