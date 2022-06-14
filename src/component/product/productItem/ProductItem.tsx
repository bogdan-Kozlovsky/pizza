import React from 'react';

import { Button } from 'common/button/Button';
import s from 'component/product/productItem/style.module.scss';

export const ProductItem = () => (
  <div className={s.productItem}>
    <img className={s.productItem__img} src="/images/1.jpg" alt="images" />
    <h3 className={s.productItem__title}>Чизбургер-пицца</h3>
    <div className={s.productItem__list}>
      <ul className={`${s.productItem__list_box} ${s.productItem__list_top}`}>
        <li className={s.productItem__item_top}>тонкое</li>
        <li className={`${s.productItem__item_top} ${s.productItem__list_active}`}>
          традиционное
        </li>
      </ul>
      <ul className={s.productItem__list_box}>
        <li className={`${s.productItem__item_bottom} ${s.productItem__list_active}`}>
          26 см.
        </li>
        <li className={s.productItem__item_bottom}>30 см.</li>
        <li className={s.productItem__item_bottom}>40 см.</li>
      </ul>
    </div>

    <div className={s.productItem__wrapper}>
      <span className={s.productItem__price}>от 395 Ua</span>
      <Button />
    </div>
  </div>
);
