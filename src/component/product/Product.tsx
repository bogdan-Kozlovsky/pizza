import React, { useEffect, useState } from 'react';

import preloader from 'assets/images/icon/preloader.svg';
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

  const [activeIndexPagination, setActiveIndexPagination] = useState(INITIAL_VALUES);

  const isSortBy = itemSortModal.sortProperty.replace('-', '');
  const isOrder = itemSortModal.sortProperty.includes('-') ? 'asc' : 'desc';
  const isCategory =
    itemCategoryIndex > FIRST_ELEMENT ? `&category=${itemCategoryIndex}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  const isError = status === 'error';
  const isStatusLoading = status === 'loading';

  useEffect(() => {
    dispatch(
      fetchProducts({ isSortBy, isOrder, isCategory, search, activeIndexPagination }),
    );
  }, [itemCategoryIndex, itemSortModal, searchValue, activeIndexPagination]);

  return (
    <div className={s.product}>
      <Sort />
      <h1 className={s.product__title}>Усі піци</h1>
      <div className={s.product__items}>
        {isStatusLoading ? (
          <img className="preloader" src={preloader} alt="preloader" />
        ) : !items.length ? (
          <div>Піци не знайдено</div>
        ) : isError ? (
          <ErrorMessage />
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {items.map((item, index) => (
              <ProductItem key={`${item.id + item.imageUrl}`} item={item} id={index} />
            ))}
          </>
        )}
      </div>
      <Pagination
        activeIndex={activeIndexPagination}
        setActiveIndex={setActiveIndexPagination}
      />
    </div>
  );
};
