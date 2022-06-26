import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { ModalItem } from 'component/sort/modal/modalitem/ModalItem';
import s from 'component/sort/modal/style.module.scss';
import { ActiveItemSortModalType, ModalPropsType } from 'component/sort/modal/types';
import { setItemSortValue } from 'store/filter/slices';

const items = [
  { name: 'популярности 🔺', sortProperty: 'rating' },
  { name: 'популярности 🔻', sortProperty: '-rating' },
  { name: 'цене 🔺', sortProperty: 'price' },
  { name: 'цене 🔻', sortProperty: '-price' },
  { name: 'алфавиту 🖤', sortProperty: 'title' },
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
        src="/images/icon/arrow.svg"
        alt="arrow"
      />
      <p className={s.modal__description}>Сортировка по:</p>

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
