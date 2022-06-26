export type InitialStateType = {
  items: ProductItemType[];
  status: 'loading' | 'success' | 'error';
};

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

export type SearchPizzaParams = {
  isSortBy: string;
  isOrder: string;
  isCategory: string;
  search: string;
  activeIndexPagination: number;
};
