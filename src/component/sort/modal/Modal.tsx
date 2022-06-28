import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import arrow from 'assets/images/icon/arrow.svg';
import { ModalItem } from 'component/sort/modal/modalitem/ModalItem';
import s from 'component/sort/modal/style.module.scss';
import { ActiveItemSortModalType, ModalPropsType } from 'component/sort/modal/types';
import { setItemSortValue } from 'store/filter/slices';

const items = [
  { name: 'популярності 🔺', sortProperty: 'rating' },
  { name: 'популярності 🔻', sortProperty: '-rating' },
  { name: 'ціні 🔺', sortProperty: 'price' },
  { name: 'ціні 🔻', sortProperty: '-price' },
  { name: 'алфавіту 🖤', sortProperty: 'title' },
];

export const Modal = (props: ModalPropsType) => {
  const { itemSortModal } = props;

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onVisibleClick = () => {
    setIsVisible(!isVisible);
  };

  const onActiveClick = (sortProperty: ActiveItemSortModalType) => {
    dispatch(setItemSortValue(sortProperty));
    setIsVisible(false);
  };

  return (
    <div role="presentation" className={s.modal} onClick={e => e.stopPropagation()}>
      <img
        className={`${s.modal__decor} ${isVisible ? s.modal__decor_reverse : ''}`}
        src={arrow}
        alt="arrow"
      />
      <p className={s.modal__description}>Сортування за:</p>

      <span onClick={onVisibleClick} role="presentation" className={s.modal__active}>
        {itemSortModal.name}
      </span>

      {isVisible && (
        <ModalItem
          setIsVisible={setIsVisible}
          items={items}
          onActiveClick={onActiveClick}
          activeItemModal={itemSortModal}
        />
      )}
    </div>
  );
};
