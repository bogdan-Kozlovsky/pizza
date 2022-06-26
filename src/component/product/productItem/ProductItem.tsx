import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from 'common/button/Button';
import { SizeItem } from 'component/product/productItem/sizeItem/SizeItem';
import s from 'component/product/productItem/style.module.scss';
import { TypeItem } from 'component/product/productItem/typeItem/TypeItem';
import { ProductItemPropsType } from 'component/product/types';
import { useAppSelector } from 'hooks/useAppSelector';
import { addItem } from 'store/cart/slices';

const FIRST_INDEX = 0;
const typesValue = ['тонкое', 'традиционное'];

export const ProductItem = ({ item }: ProductItemPropsType) => {
  const { imageUrl, name, price, sizes, types, id } = item;

  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(FIRST_INDEX);
  const [activeSize, setActiveSize] = useState(FIRST_INDEX);

  const cartItem = useAppSelector(state => state.cart.items.find(obj => obj.id === id));

  const addedCount = cartItem ? cartItem.count : '';
  const addProductItem = () => {
    const oneItem = {
      id,
      imageUrl,
      name,
      price,
      type: typesValue[activeType],
      size: sizes[activeSize],
      count: 0,
    };

    dispatch(addItem(oneItem));
  };
  return (
    <div className={s.productItem}>
      <Link to={`/${item.id}`}>
        <img src={imageUrl} alt="images" />
      </Link>

      <h3>{name}</h3>
      <div>
        <div className={s.productItem__list}>
          <TypeItem types={types} activeType={activeType} setActiveType={setActiveType} />

          <SizeItem sizes={sizes} activeSize={activeSize} setActiveSize={setActiveSize} />
        </div>

        <div className={s.productItem__wrapper}>
          <span className={s.productItem__price}>от {price} Ua</span>
          <Button value={addedCount} onClick={addProductItem} />
        </div>
      </div>
    </div>
  );
};
