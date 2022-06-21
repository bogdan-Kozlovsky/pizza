import React, { useEffect, useRef } from 'react';

import { ModalItemPropsType } from 'component/sort/modal/modalitem/types';
import s from 'component/sort/modal/style.module.scss';

export const ModalItem = (props: ModalItemPropsType) => {
  const { activeItemModal, items, onActiveClick, setIsVisible } = props;

  const modalRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!event.path.includes(modalRef)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      console.log('not');
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <ul ref={modalRef} className={s.modal__list}>
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
