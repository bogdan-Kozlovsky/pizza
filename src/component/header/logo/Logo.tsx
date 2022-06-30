import React from 'react';

import { Link } from 'react-router-dom';

import logo from 'assets/images/icon/logo.svg';
import s from 'component/header/logo/style.module.scss';
import { PathNavigation } from 'enums/navigation';

export const Logo = () => (
  <Link className={s.logo} to={PathNavigation.PRODUCT}>
    <img className={s.logo__icon} src={logo} alt="logo" />
    <div className={s.logo__wrap}>
      <h3>Pizza</h3>
      <span>найсмачніша піца у всесвіті</span>
    </div>
  </Link>
);
