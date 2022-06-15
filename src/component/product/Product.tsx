import React, { useEffect, useState } from 'react';

import { ProductItem } from 'component/product/productItem/ProductItem';
import s from 'component/product/style.module.scss';
import { ProductItemType } from 'component/product/types';
import Skeleton from 'component/skeleton/Skeleton';
import { Sort } from 'component/sort/Sort';

const AMOUNT_ARRAY = 6;

export const Product = () => {
  const [items, setItems] = useState<ProductItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://62aa1363371180affbced5e4.mockapi.io/items')
      .then(response => response.json())
      .then(json => setItems(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Sort />
      <h1 className={s.product__title}>Все пиццы</h1>
      <div className={s.product__items}>
        {isLoading
          ? // eslint-disable-next-line react/no-array-index-key
            [...new Array(AMOUNT_ARRAY)].map((_, index) => <Skeleton key={index} />)
          : items.map(item => (
              <ProductItem key={`${item.id + item.imageUrl}`} item={item} />
            ))}
      </div>
    </div>
  );
};
