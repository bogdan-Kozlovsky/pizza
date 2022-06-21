import React from 'react';

import s from 'common/button/style.module.scss';

type ButtonPropsType = {
  onClick: any;
  value: number | string;
};

const FIRST_NUMBER = 0;

export const Button = ({ onClick, value }: ButtonPropsType) => (
  <button onClick={onClick} className={s.btn} type="button">
    <img src="/images/icon/plus.svg" alt="plus" />
    <span className={s.text}>Добавить</span>
    {value > FIRST_NUMBER && <span className={s.count}>{value}</span>}
  </button>
);
