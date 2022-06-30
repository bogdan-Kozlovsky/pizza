import React from 'react';

import clear from 'assets/images/icon/clear.svg';
import shoppingCart from 'assets/images/icon/shopping-cart.svg';
import s from 'component/shoppingCart/style.module.scss';
import { WrapperTopPropsType } from 'component/shoppingCart/wrapperTop/types';

export const WrapperTop = ({ onClearItemsClick }: WrapperTopPropsType) => (
  <div className={s.shoppingCart__wrapper_top}>
    <h3 className={s.shoppingCart__title}>
      <img className={s.shoppingCart__icon} src={shoppingCart} alt="shopping" />
      Кошик
    </h3>
    <button
      onClick={onClearItemsClick}
      type="button"
      className={s.shoppingCart__btn_clear}
    >
      <img className={s.shoppingCart__icon} src={clear} alt="shopping" />
      Очистити кошик
    </button>
  </div>
);
