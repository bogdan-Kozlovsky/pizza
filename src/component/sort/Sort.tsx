import React from 'react';

import { useDispatch } from 'react-redux';

import { Modal } from 'component/sort/modal/Modal';
import s from 'component/sort/style.module.scss';
import { SortPropsType } from 'component/sort/types';
import { useAppSelector } from 'hooks/useAppSelector';
import { setItemCategoryIndex } from 'store/slices/filter';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Sort = (props: SortPropsType) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;

  const itemCategoryValue = useAppSelector(state => state.filter.itemCategoryIndex);
  const itemSortModal = useAppSelector(state => state.filter.itemSortValue);

  const dispatch = useDispatch();

  const onSetActiveClick = (index: number) => {
    dispatch(setItemCategoryIndex(index));
  };

  return (
    <div className={`${s.sort__wrapper} ${s.sort}`}>
      <ul className={s.sort__list}>
        {categories.map((categoryName, index) => (
          <li
            role="presentation"
            key={`${categoryName + index}`}
            className={`${s.sort__item} ${
              itemCategoryValue === index ? s.sort__active : ''
            }`}
            onClick={() => onSetActiveClick(index)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
      <Modal itemSortModal={itemSortModal} />
    </div>
  );
};
