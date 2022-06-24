import React from 'react';

import s from 'component/fullProduct/style.module.scss';
import { StarPropsType } from 'component/fullProduct/types';

const FIRST_INDEX = 0;

export const Star = ({ rating }: StarPropsType) => {
  const arrStars = [];
  for (let i = FIRST_INDEX; i < rating; i++) {
    arrStars.push(i);
  }
  return (
    <div className={s.fullProduct__list_start}>
      {arrStars.map(_ => (
        <span key={_}>⭐</span>
      ))}
    </div>
  );
};
