import React from 'react';

import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';
import { Sort } from 'component/sort/Sort';
import items from 'data/data.json';

export const Product = () => (
  <div>
    <Sort />
    <h1 className={s.product__title}>Все пиццы</h1>
    <div className={s.product__items}>
      {items.map(item => (
        <ProductItem key={`${item.id + item.imageUrl}`} item={item} />
      ))}
    </div>
  </div>
);
