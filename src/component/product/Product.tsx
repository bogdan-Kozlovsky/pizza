import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { ErrorMessage } from 'component/errorMessage/ErrorMessage';
import { Pagination } from 'component/pagination/Pagination';
import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';
import { ProductPropsType } from 'component/product/types';
import Skeleton from 'component/skeleton/Skeleton';
import { Sort } from 'component/sort/Sort';
import { useAppSelector } from 'hooks/useAppSelector';
import {
  selectCategoryIndex,
  selectItems,
  selectSortModal,
  selectStatus,
} from 'store/selectors';
import { fetchProducts } from 'store/slices/product';

const FIRST_ELEMENT = 0;
const INITIAL_VALUES = 1;

export const Product = (props: ProductPropsType) => {
  const { searchValue } = props;

  const dispatch = useDispatch();

  const status = useAppSelector(selectStatus);
  const items = useAppSelector(selectItems);
  const itemCategoryIndex = useAppSelector(selectCategoryIndex);
  const itemSortModal = useAppSelector(selectSortModal);

  const [activeIndexPagination, setActiveIndexPagination] =
    useState<number>(INITIAL_VALUES);

  const isSortBy = itemSortModal.sortProperty.replace('-', '');
  const isOrder = itemSortModal.sortProperty.includes('-') ? 'asc' : 'desc';
  const isCategory =
    itemCategoryIndex > FIRST_ELEMENT ? `&category=${itemCategoryIndex}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  const skeletons = [...new Array(items.length)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Skeleton key={index} />
  ));

  const pizzas = items.map((item, index) => (
    <ProductItem key={`${item.id + item.imageUrl}`} item={item} id={index} />
  ));

  useEffect(() => {
    dispatch(
      // @ts-ignore
      fetchProducts({ isSortBy, isOrder, isCategory, search, activeIndexPagination }),
    );
  }, [itemCategoryIndex, itemSortModal, searchValue, activeIndexPagination]);

  return (
    <div>
      <Sort />
      <h1 className={s.product__title}>Все пиццы</h1>
      <div className={s.product__items}>
        {status === 'error' ? (
          <ErrorMessage />
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>{status === 'loading' ? skeletons : pizzas}</>
        )}
      </div>
      <Pagination
        activeIndex={activeIndexPagination}
        setActiveIndex={setActiveIndexPagination}
      />
    </div>
  );
};
