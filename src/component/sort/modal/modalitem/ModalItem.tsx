import React from 'react';

import { ModalItemPropsType } from 'component/sort/modal/modalitem/types';
import s from 'component/sort/modal/style.module.scss';

export const ModalItem = ({ items, onActiveClick, activeItem }: ModalItemPropsType) => (
  <ul className={s.modal__list}>
    {items.map((item, index) => (
      <li
        key={item}
        onClick={() => onActiveClick(index)}
        role="presentation"
        className={`${s.modal__item} ${activeItem === index ? s.modal__item_active : ''}`}
      >
        {item}
      </li>
    ))}
  </ul>
);
