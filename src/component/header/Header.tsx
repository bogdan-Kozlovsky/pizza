import React from 'react';

import { Link } from 'react-router-dom';

import s from 'component/header/style.module.scss';

export const Header = () => (
  <div>
    <div className={s.header__wrapper}>
      <Link to="/">
        <img className={s.header__logo} src="/images/icon/logo.svg" alt="" />
      </Link>

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={s.header__label}>
        <input className={s.header__input} type="text" />
        <button className={s.header__search_btn} type="button">
          <img className={s.header__search_icon} src="/images/icon/search.svg" alt="" />
        </button>
      </label>

      <div>
        <Link className={`btn ${s.header__card_link}`} to="/card">
          <span className={s.header__card_wrapper}>
            <span>580</span>
            <img
              className={s.header__card_icon}
              src="/images/icon/price.svg"
              alt="price"
            />
          </span>
          <span className={s.header__card_decor} />
          <span className={s.header__card_wrapper}>
            <span>0</span>
            <img
              className={s.header__card_icon}
              src="/images/icon/shopping.svg"
              alt="shopping"
            />
          </span>
        </Link>
      </div>
    </div>
  </div>
);
