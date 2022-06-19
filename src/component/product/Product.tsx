import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { axiosConfig } from 'api/config';
import { Pagination } from 'component/pagination/Pagination';
import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';
import { ProductItemType, ProductPropsType } from 'component/product/types';
import Skeleton from 'component/skeleton/Skeleton';
import { Sort } from 'component/sort/Sort';
import { useAppSelector } from 'hooks/useAppSelector';

const FIRST_ELEMENT = 0;
const INITIAL_VALUES = 1;

export const Product = (props: ProductPropsType) => {
  const { searchValue } = props;

  const itemCategoryValue = useAppSelector(state => state.filter.itemCategoryIndex);
  const itemSortModal = useAppSelector(state => state.filter.itemSortValue);

  const [items, setItems] = useState<ProductItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeIndexPagination, setActiveIndexPagination] =
    useState<number>(INITIAL_VALUES);

  const isSortBy = itemSortModal.sortProperty.replace('-', '');
  const isOrder = itemSortModal.sortProperty.includes('-') ? 'asc' : 'desc';
  const isCategory =
    itemCategoryValue > FIRST_ELEMENT ? `&category=${itemCategoryValue}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<ProductItemType[]>(
        `${axiosConfig.baseURL}?${search}${isCategory}&sortBy=${isSortBy}&order=${isOrder}&page=${activeIndexPagination}&limit=4`,
      )
      .then(({ data }) => setItems(data))
      .finally(() => setIsLoading(false));
  }, [itemCategoryValue, itemSortModal, searchValue, activeIndexPagination]);

  return (
    <div>
      <Sort />
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
