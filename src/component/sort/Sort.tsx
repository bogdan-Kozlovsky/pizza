import React from 'react';

import { Modal } from 'component/sort/modal/Modal';
import s from 'component/sort/style.module.scss';
import { SortPropsType } from 'component/sort/types';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Sort = (props: SortPropsType) => {
  const { itemSortValue, setItemSortValue, setItemSortModal, itemSortModal } = props;

  const onSetActiveClick = (index: number) => {
    setItemSortValue(index);
  };
  return (
    <div className={`${s.sort__wrapper} ${s.sort}`}>
      <ul className={s.sort__list}>
        {categories.map((categoryName, index) => (
          <li
            role="presentation"
            key={`${categoryName + index}`}
            className={`${s.sort__item} ${itemSortValue === index ? s.sort__active : ''}`}
            onClick={() => onSetActiveClick(index)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
      <Modal itemSortModal={itemSortModal} setItemSortModal={setItemSortModal} />
    </div>
  );
};
