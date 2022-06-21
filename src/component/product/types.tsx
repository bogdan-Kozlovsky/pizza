export type ProductItemType = {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
};

export type ProductItemPropsType = {
  item: ProductItemType;
  id:number
};

export type ProductPropsType = {
  searchValue: string;
};
