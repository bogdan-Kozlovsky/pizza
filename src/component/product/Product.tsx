import React from 'react';

import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';
import { Sort } from 'component/sort/Sort';

export const Product = () => (
  <div>
    <Sort />
    <h1 className={s.product__title}>Все пиццы</h1>
    <div className={s.product__items}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </div>
);
