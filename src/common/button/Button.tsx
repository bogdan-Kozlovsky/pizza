import React from 'react';

import s from 'common/button/style.module.scss';

export const Button = () => (
  <button className={s.btn} type="button">
    <img src="/images/icon/plus.svg" alt="plus" />
    <span className={s.text}>Добавить</span>
    <span className={s.count}>2</span>
  </button>
);
