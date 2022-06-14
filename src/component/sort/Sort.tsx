import React from 'react';

import { Modal } from 'component/sort/modal/Modal';
import s from 'component/sort/style.module.scss';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Sort = () => (
  <div className={`${s.sort__wrapper} ${s.sort}`}>
    <ul className={s.sort__list}>
      {categories.map(categoryName => (
        <li
          role="presentation"
          key={categoryName}
          // className={`${s.sort__active} ${s.sort__item}`}
          className={`${s.sort__item}`}
          // className={value === i ? 'active' : ''}
        >
          {categoryName}
        </li>
      ))}
    </ul>
    <Modal />
  </div>
);
