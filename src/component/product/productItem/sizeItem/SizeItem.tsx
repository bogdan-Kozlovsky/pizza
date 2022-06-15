import React, { useState } from 'react';

import { SizeItemPropsType } from 'component/product/productItem/sizeItem/types';
import s from 'component/product/productItem/style.module.scss';

const FIRST_INDEX = 0;

export const SizeItem = ({ sizes }: SizeItemPropsType) => {
  const [activeSize, setActiveSize] = useState<number>(FIRST_INDEX);

  return (
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
};
