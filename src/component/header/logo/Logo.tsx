import React from 'react';

import { Link } from 'react-router-dom';

import s from 'component/header/style.module.scss';
import { PathNavigation } from 'enums/navigation';

export const Logo = () => (
  <Link to={PathNavigation.PRODUCT}>
    <img className={s.header__logo} src="/images/icon/logo.svg" alt="logo" />
  </Link>
);
