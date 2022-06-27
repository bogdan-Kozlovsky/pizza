import React, { useEffect, useState } from 'react';

import { ErrorMessage } from 'component/errorMessage/ErrorMessage';
import { Pagination } from 'component/pagination/Pagination';
import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';
import { ProductPropsType } from 'component/product/types';
import { Sort } from 'component/sort/Sort';
import { useAppSelector } from 'hooks/useAppSelector';
import { fetchProducts } from 'store/asyncThunk/product';
import { selectCategoryIndex, selectSortModal } from 'store/filter/selectors';
import { selectItems, selectStatus } from 'store/product/selectors';
import { useAppDispatch } from 'store/store';

const FIRST_ELEMENT = 0;
const INITIAL_VALUES = 1;

export const Product = (props: ProductPropsType) => {
  const { searchValue } = props;

  const dispatch = useAppDispatch();

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

  const pizzas = items.map((item, index) => (
    <ProductItem key={`${item.id + item.imageUrl}`} item={item} id={index} />
  ));

  const isError = status === 'error';

  useEffect(() => {
    dispatch(
      fetchProducts({ isSortBy, isOrder, isCategory, search, activeIndexPagination }),
    );
  }, [itemCategoryIndex, itemSortModal, searchValue, activeIndexPagination]);

  return (
    <div className={s.product}>
      {/* {!items.length && <div>not pizzas</div>} */}
      <Sort />
      <h1 className={s.product__title}>Усі піци</h1>
      {status === 'loading' && (
        <img className="preloader" src="/images/icon/preloader.svg" alt="preloader" />
      )}
      <div className={s.product__items}>
        {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
        {isError ? <ErrorMessage /> : <>{pizzas}</>}
      </div>
      <Pagination
        activeIndex={activeIndexPagination}
        setActiveIndex={setActiveIndexPagination}
      />
    </div>
  );
};
