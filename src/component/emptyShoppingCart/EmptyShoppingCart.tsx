import React from 'react';

import { Link } from 'react-router-dom';

import s from 'component/emptyShoppingCart/style.module.scss';
import { PathNavigation } from 'enums/navigation';

export const EmptyShoppingCart = () => (
  <div className={s.emptyShoppingCart}>
    <h2 className={s.emptyShoppingCart__title}>Корзина пустая 🥲</h2>

    <p className={s.emptyShoppingCart__text}>
      Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди
      на главную страницу.
    </p>

    <img
      className={s.emptyShoppingCart__img}
      src="/images/empty-shopping-cart.jpg"
      alt="empty-shopping-cart"
    />

    <Link className={s.emptyShoppingCart__link} to={PathNavigation.PRODUCT}>
      Вернуться назад
    </Link>
  </div>
);
