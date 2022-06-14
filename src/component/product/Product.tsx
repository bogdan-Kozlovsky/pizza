import React from 'react';

import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';

export const Product = () => (
  <div>
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
