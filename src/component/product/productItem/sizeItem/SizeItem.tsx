import React from 'react';

import { SizeItemPropsType } from 'component/product/productItem/sizeItem/types';
import s from 'component/product/productItem/style.module.scss';

export const SizeItem = ({ sizes, setActiveSize, activeSize }: SizeItemPropsType) => (
  <ul className={s.productItem__list_box}>
    {sizes.map((size, index) => (
      <li
        role="presentation"
        key={`${size + index} `}
        onClick={() => setActiveSize(index)}
        className={`${s.productItem__item_bottom} ${
          activeSize === index ? s.productItem__list_active : ''
        }`}
      >
        {size}
      </li>
    ))}
  </ul>
);
