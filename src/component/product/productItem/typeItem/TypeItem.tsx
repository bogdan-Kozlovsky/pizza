import React from 'react';

import { typesValue } from 'component/product/productItem/ProductItem';
import s from 'component/product/productItem/style.module.scss';
import { TypeItemPropsType } from 'component/product/productItem/typeItem/types';

export const TypeItem = ({ types, setActiveType, activeType }: TypeItemPropsType) => (
  <ul className={`${s.productItem__list_box} ${s.productItem__list_top}`}>
    {types.map((type, index) => (
      <li
        onClick={() => setActiveType(index)}
        role="presentation"
        key={`${type + index} `}
        className={`${s.productItem__item_top} ${
          activeType === index ? s.productItem__list_active : ''
        }`}
      >
        {typesValue[type]}
      </li>
    ))}
  </ul>
);
