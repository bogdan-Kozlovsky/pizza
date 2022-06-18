import React, { useEffect, useState } from 'react';

import { Pagination } from 'component/pagination/Pagination';
import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';
import { ProductItemType, ProductPropsType } from 'component/product/types';
import Skeleton from 'component/skeleton/Skeleton';
import { Sort } from 'component/sort/Sort';

const FIRST_ELEMENT = 0;
const INITIAL_VALUES = 1;

export const Product = (props: ProductPropsType) => {
  const { searchValue } = props;

  const [items, setItems] = useState<ProductItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [itemSortValue, setItemSortValue] = useState<number>(INITIAL_VALUES);
  const [itemSortModal, setItemSortModal] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [activeIndexPagination, setActiveIndexPagination] =
    useState<number>(INITIAL_VALUES);

  // const onPageSwitcherClick = (index: number) => {
  //   setActiveIndexPagination(index);
  // };
  const isSortBy = itemSortModal.sortProperty.replace('-', '');
  const isOrder = itemSortModal.sortProperty.includes('-') ? 'asc' : 'desc';
  const isCategory = itemSortValue > FIRST_ELEMENT ? `&category=${itemSortValue}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62aa1363371180affbced5e4.mockapi.io/items?${search}${isCategory}&sortBy=${isSortBy}&order=${isOrder}&page=${activeIndexPagination}&limit=4`,
    )
      .then(response => response.json())
      .then(json => setItems(json))
      .finally(() => setIsLoading(false));
  }, [itemSortValue, itemSortModal, searchValue, activeIndexPagination]);

  return (
    <div>
      <Sort
        itemSortValue={itemSortValue}
        setItemSortValue={setItemSortValue}
        itemSortModal={itemSortModal}
        setItemSortModal={setItemSortModal}
      />
      <h1 className={s.product__title}>Все пиццы</h1>
      <div className={s.product__items}>
        {isLoading
          ? // eslint-disable-next-line react/no-array-index-key
            [...new Array(items.length)].map((_, index) => <Skeleton key={index} />)
          : items.map(item => (
              <ProductItem key={`${item.id + item.imageUrl}`} item={item} />
            ))}
      </div>
      <Pagination
        activeIndex={activeIndexPagination}
        setActiveIndex={setActiveIndexPagination}
      />
    </div>
  );
};
