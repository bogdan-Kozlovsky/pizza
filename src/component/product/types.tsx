import { ProductItemType } from 'store/product/types';

export type ProductItemPropsType = {
  item: ProductItemType;
  id: number;
};

export type ProductPropsType = {
  searchValue: string;
};
