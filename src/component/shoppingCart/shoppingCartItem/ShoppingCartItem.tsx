import React from 'react';

import { useDispatch } from 'react-redux';

import s from 'component/shoppingCart/shoppingCartItem/style.module.scss';
import { addItem, decrementItem, ItemType, removeItem } from 'store/slices/cart';

type ShoppingCartItemPropsType = {
  item: ItemType;
};

const a = 1;
export const ShoppingCartItem = ({ item }: ShoppingCartItemPropsType) => {
  const { count, type, imageUrl, name, size, price, id } = item;

  const dispatch = useDispatch();

  const onDeleteItemClick = () => {
    dispatch(removeItem(id));
  };

  const onIncrementItemClick = () => {
    dispatch(addItem({ id }));
  };

  const onDecrementItemClick = () => {
    dispatch(decrementItem({ id }));
  };

  return (
    <div className={s.shoppingCartItem}>
      <div className={s.shoppingCartItem__wrapper}>
        <img className={s.shoppingCartItem__img} src={imageUrl} alt={name} />
        <div className={s.shoppingCartItem__wrapper_description}>
          <p className={s.shoppingCartItem__text}>{name}</p>
          <span className={s.shoppingCartItem__description}>
            {type} тесто, {size} см.
          </span>
        </div>

        <div className={s.shoppingCartItem__counts}>
          <button
            disabled={count === a}
            onClick={onDecrementItemClick}
            className={s.shoppingCartItem__btn}
            type="button"
          >
            <img
              className={s.shoppingCartItem__icon}
              src="/images/icon/decrement.svg"
              alt="decrement"
            />
          </button>
          <span className={s.shoppingCartItem__count}>{count}</span>
          <button
            onClick={onIncrementItemClick}
            className={s.shoppingCartItem__btn}
            type="button"
          >
            <img
              className={s.shoppingCartItem__icon}
              src="/images/icon/increment.svg"
              alt="increment"
            />
          </button>
        </div>

        {/* // price */}
        <p className={s.shoppingCartItem__price}>{price * count} ua</p>

        <button
          onClick={onDeleteItemClick}
          className={s.shoppingCartItem__btn}
          type="button"
        >
          <img
            className={s.shoppingCartItem__icon}
            src="/images/icon/delete.svg"
            alt="delete"
          />
        </button>
      </div>
    </div>
  );
};
