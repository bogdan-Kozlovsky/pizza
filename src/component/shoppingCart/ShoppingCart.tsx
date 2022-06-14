import React from 'react';

import { Link } from 'react-router-dom';

import { ShoppingCartItem } from 'component/shoppingCart/shoppingCartItem/ShoppingCartItem';
import s from 'component/shoppingCart/style.module.scss';
import { PathNavigation } from 'enums/navigation';

export const ShoppingCart = () => (
  <div className={s.shoppingCart}>
    <div className={s.shoppingCart__wrapper_top}>
      <h3 className={s.shoppingCart__title}>
        <img
          className={s.shoppingCart__icon}
          src="/images/icon/shopping-cart.svg"
          alt="shopping"
        />
        Корзина
      </h3>
      <h4 className={s.shoppingCart__subtitle}>
        <img
          className={s.shoppingCart__icon}
          src="/images/icon/clear.svg"
          alt="shopping"
        />
        Очистить корзину
      </h4>
    </div>

    <div className={s.shoppingCart__wrapper}>
      <ShoppingCartItem />
      <ShoppingCartItem />
    </div>

    <div className={s.shoppingCart__wrapper_description}>
      <span className={s.shoppingCart__span}>
        Всего пицц: <span className={s.shoppingCart__black}>3 шт.</span>
      </span>
      <span className={s.shoppingCart__span}>
        Всего пицц: <span className={s.shoppingCart__orange}>3 шт.</span>
      </span>
    </div>

    <div className={s.shoppingCart__wrapper_btn}>
      <Link className={s.shoppingCart__btn_return} to={PathNavigation.PRODUCT}>
        <img src="/images/icon/return.svg" alt="return" />
        Вернуться назад
      </Link>

      <button className={s.shoppingCart__btn} type="button">
        Оплатить сейчас
      </button>
    </div>
  </div>
);
