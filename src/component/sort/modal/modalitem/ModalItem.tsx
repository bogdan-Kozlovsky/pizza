import React from 'react';

import { ModalItemPropsType } from 'component/sort/modal/modalitem/types';
import s from 'component/sort/modal/style.module.scss';

export const ModalItem = (props: ModalItemPropsType) => {
  const { activeItemModal, items, onActiveClick } = props;

  return (
    <ul className={s.modal__list}>
      {items.map(item => (
        <li
          key={item.name}
          onClick={() => onActiveClick(item)}
          role="presentation"
          className={`${s.modal__item} ${
            activeItemModal.sortProperty === item.sortProperty ? s.modal__item_active : ''
          }`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
