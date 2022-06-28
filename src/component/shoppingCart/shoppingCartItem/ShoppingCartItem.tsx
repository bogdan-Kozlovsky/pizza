import React from 'react';

import { useDispatch } from 'react-redux';

import decrement from 'assets/images/icon/decrement.svg';
import deleteIcon from 'assets/images/icon/delete.svg';
import increment from 'assets/images/icon/increment.svg';
import s from 'component/shoppingCart/shoppingCartItem/style.module.scss';
import { addItem, decrementItem, removeItem } from 'store/cart/slices';
import { ItemType } from 'store/cart/types';

type ShoppingCartItemPropsType = {
  item: ItemType;
};

const a = 1;
export const ShoppingCartItem = ({ item }: ShoppingCartItemPropsType) => {
  const { count, type, imageUrl, name, size, price, id } = item;

  const dispatch = useDispatch();

  const onDeleteItemClick = () => {
    // eslint-disable-next-line no-alert,no-restricted-globals
    const isDone = confirm('Ви точно хочете пиццу?');
    if (isDone) {
      dispatch(removeItem(id));
    }
  };

  const onIncrementItemClick = () => {
    dispatch(addItem({ id, imageUrl, name, price, type, size, count }));
  };

  const onDecrementItemClick = () => {
    dispatch(decrementItem(id));
  };

  return (
    <div className={s.shoppingCartItem}>
      <div className={s.shoppingCartItem__wrapper}>
        <div className={s.shoppingCartItem__wrap}>
          <img className={s.shoppingCartItem__img} src={imageUrl} alt={name} />
          <div className={s.shoppingCartItem__wrapper_description}>
            <p className={s.shoppingCartItem__text}>{name}</p>
            <span className={s.shoppingCartItem__description}>
              {type} тісто, {size} см.
            </span>
          </div>
        </div>

        <div className={s.shoppingCartItem__counts}>
          <button
            disabled={count === a}
            onClick={onDecrementItemClick}
            className={s.shoppingCartItem__btn}
            type="button"
          >
            <img className={s.shoppingCartItem__icon} src={decrement} alt="decrement" />
          </button>
          <span className={s.shoppingCartItem__count}>{count}</span>
          <button
            onClick={onIncrementItemClick}
            className={s.shoppingCartItem__btn}
            type="button"
          >
            <img className={s.shoppingCartItem__icon} src={increment} alt="increment" />
          </button>
        </div>

        {/* // price */}
        <div className={s.shoppingCartItem__wrapper_nav}>
          <p className={s.shoppingCartItem__price}>{price * count} ua</p>

          <button
            onClick={onDeleteItemClick}
            className={s.shoppingCartItem__btn}
            type="button"
          >
            <img className={s.shoppingCartItem__icon} src={deleteIcon} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};
