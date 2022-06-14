import React from 'react';

import s from 'component/shoppingCart/shoppingCartItem/style.module.scss';

export const ShoppingCartItem = () => (
  <div className={s.shoppingCartItem}>
    <div className={s.shoppingCartItem__wrapper}>
      <img className={s.shoppingCartItem__img} src="/images/1.jpg" alt="1" />
      <div className={s.shoppingCartItem__wrapper_description}>
        <p className={s.shoppingCartItem__text}>Сырный цыпленок</p>
        <span className={s.shoppingCartItem__description}>тонкое тесто, 26 см.</span>
      </div>

      <div className={s.shoppingCartItem__counts}>
        <button className={s.shoppingCartItem__btn} type="button">
          <img
            className={s.shoppingCartItem__icon}
            src="/images/icon/decrement.svg"
            alt="decrement"
          />
        </button>
        <span className={s.shoppingCartItem__count}>2</span>
        <button className={s.shoppingCartItem__btn} type="button">
          <img
            className={s.shoppingCartItem__icon}
            src="/images/icon/increment.svg"
            alt="increment"
          />
        </button>
      </div>

      {/* // price */}
      <p className={s.shoppingCartItem__price}>770 ua</p>

      <button className={s.shoppingCartItem__btn} type="button">
        <img
          className={s.shoppingCartItem__icon}
          src="/images/icon/delete.svg"
          alt="delete"
        />
      </button>
    </div>
  </div>
);
