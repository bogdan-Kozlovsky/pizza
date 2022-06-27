import React, { MouseEventHandler } from 'react';

import s from 'common/button/style.module.scss';

type ButtonPropsType = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  value: number | string;
};

const FIRST_NUMBER = 0;

export const Button = ({ onClick, value }: ButtonPropsType) => (
  <button onClick={onClick} className={s.btn} type="button">
    <span className={s.text}>В кошик</span>
    {value > FIRST_NUMBER && <span className={s.count}>{value}</span>}
  </button>
);
