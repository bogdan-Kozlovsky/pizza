import React, { useState } from 'react';

import { Modal } from 'component/sort/modal/Modal';
import s from 'component/sort/style.module.scss';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const firstElement = 0;

export const Sort = () => {
  const [activeItem, setActiveItem] = useState<number>(firstElement);

  const onSetActiveClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <div className={`${s.sort__wrapper} ${s.sort}`}>
      <ul className={s.sort__list}>
        {categories.map((categoryName, index) => (
          <li
            role="presentation"
            key={`${categoryName + index}`}
            className={`${s.sort__item} ${activeItem === index ? s.sort__active : ''}`}
            onClick={() => onSetActiveClick(index)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
      <Modal />
    </div>
  );
};
