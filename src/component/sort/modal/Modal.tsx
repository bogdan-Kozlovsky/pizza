import React from 'react';

import s from 'component/sort/modal/style.module.scss';

export const Modal = () => (
  <div className={s.modal}>
    <img className={s.modal__decor} src="/images/icon/arrow.svg" alt="arrow" />
    <p className={s.modal__description}>Сортировка по:</p>
    <span className={s.modal__active}>популярности</span>
    <ul className={s.modal__list}>
      <li className={`${s.modal__item} ${s.modal__item_active}`}>популярности</li>
      <li className={s.modal__item}>по цене</li>
      <li className={s.modal__item}>по алфавиту</li>
    </ul>
  </div>
);
