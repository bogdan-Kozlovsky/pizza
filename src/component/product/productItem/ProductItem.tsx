import React from 'react';

import { Button } from 'common/button/Button';
import { SizeItem } from 'component/product/productItem/sizeItem/SizeItem';
import s from 'component/product/productItem/style.module.scss';
import { TypeItem } from 'component/product/productItem/typeItem/TypeItem';
import { ProductItemPropsType } from 'component/product/types';

export const ProductItem = ({ item }: ProductItemPropsType) => {
  const { imageUrl, name, price, sizes, types } = item;

  return (
    <div className={s.productItem}>
      <img src={imageUrl} alt="images" />

      <h3>{name}</h3>

      <div className={s.productItem__list}>
        <TypeItem types={types} />

        <SizeItem sizes={sizes} />
      </div>

      <div className={s.productItem__wrapper}>
        <span className={s.productItem__price}>от {price} Ua</span>
        <Button />
      </div>
    </div>
  );
};
