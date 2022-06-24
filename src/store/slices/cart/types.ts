export type InitialStateType = {
  totalPrice: number;
  items: ItemType[];
};

export type ItemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
  size: number;
  count: number;
};
