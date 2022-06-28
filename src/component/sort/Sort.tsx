import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { ButtonCategory } from 'component/sort/buttonCategory/ButtonCategory';
import { Modal } from 'component/sort/modal/Modal';
import s from 'component/sort/style.module.scss';
import { useAppSelector } from 'hooks/useAppSelector';
import { setItemCategoryIndex } from 'store/filter/slices';

const categories = ['Всі', 'Мясні', 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];

export const Sort = () => {
  const itemCategoryValue = useAppSelector(state => state.filter.itemCategoryIndex);
  const itemSortModal = useAppSelector(state => state.filter.itemSortValue);
  const [valueButtonCategory, setValueButtonCategory] = useState('Категорії');

  const dispatch = useDispatch();

  const [isCloseCategory, setIsCloseCategory] = useState(false);
  const [isCloseBtn, setIsCloseBtn] = useState(true);

  const onSetActiveClick = (index: number, categoryName: string) => {
    setIsCloseCategory(false);
    setIsCloseBtn(true);
    setValueButtonCategory(categoryName);
    dispatch(setItemCategoryIndex(index));
  };

  const onCloseCategoryClick = () => {
    setIsCloseBtn(false);
    setIsCloseCategory(true);
  };

  return (
    <div className={`${s.sort__wrapper} ${s.sort}`}>
      {isCloseBtn && (
        <ButtonCategory
          valueButtonCategory={valueButtonCategory}
          onCloseCategoryClick={onCloseCategoryClick}
        />
      )}

      <ul className={`${s.sort__list} ${isCloseCategory ? s.sort__aaa : ''} `}>
        {categories.map((categoryName, index) => (
          <li
            role="presentation"
            key={`${categoryName + index}`}
            className={`${s.sort__item} ${
              itemCategoryValue === index ? s.sort__active : ''
            }`}
            onClick={() => onSetActiveClick(index, categoryName)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
      <Modal itemSortModal={itemSortModal} />
    </div>
  );
};
