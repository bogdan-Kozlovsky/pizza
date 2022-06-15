import React, { useState } from 'react';

import { ModalItem } from 'component/sort/modal/modalitem/ModalItem';
import s from 'component/sort/modal/style.module.scss';

const FIRST_INDEX = 0;
const items = ['популярности', 'цене', 'алфавиту'];

export const Modal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(FIRST_INDEX);

  const onVisibleClick = () => {
    setIsVisible(!isVisible);
  };

  const onActiveClick = (index: number) => {
    setActiveItem(index);
    setIsVisible(false);
  };

  return (
    <div className={s.modal}>
      <img
        className={`${s.modal__decor} ${isVisible ? s.modal__decor_reverse : ''}`}
        src="/images/icon/arrow.svg"
        alt="arrow"
      />
      <p className={s.modal__description}>Сортировка по:</p>

      <span onClick={onVisibleClick} role="presentation" className={s.modal__active}>
        {items[activeItem]}
      </span>

      {isVisible && (
        <ModalItem items={items} onActiveClick={onActiveClick} activeItem={activeItem} />
      )}
    </div>
  );
};
