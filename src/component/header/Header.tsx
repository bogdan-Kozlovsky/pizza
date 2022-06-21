import React from 'react';

import { Link } from 'react-router-dom';

import s from 'component/header/style.module.scss';
import { HeaderPropsType } from 'component/header/types';
import { PathNavigation } from 'enums/navigation';
import { useAppSelector } from 'hooks/useAppSelector';

export const Header = (props: HeaderPropsType) => {
  const { searchValue, setValue, onChange } = props;

  const totalPrice = useAppSelector(state => state.cart.totalPrice);
  const itemsProduct = useAppSelector(state => state.cart.items);

  const onClearClick = () => {
    setValue('');
  };
  return (
    <div>
      <div className={s.header__wrapper}>
        <Link to={PathNavigation.PRODUCT}>
          <img className={s.header__logo} src="/images/icon/logo.svg" alt="logo" />
        </Link>

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={s.header__label}>
          <input
            value={searchValue}
            onChange={onChange}
            className={s.header__input}
            type="text"
          />
          {searchValue && (
            <p className={s.header__clear} role="presentation" onClick={onClearClick}>
              X
            </p>
          )}
          <button className={s.header__search_btn} type="button">
            <img className={s.header__search_icon} src="/images/icon/search.svg" alt="" />
          </button>
        </label>

        <div>
          <Link
            className={`btn ${s.header__card_link}`}
            to={PathNavigation.SHOPPING_CART}
          >
            <span className={s.header__card_wrapper}>
              <span>{totalPrice}</span>
              <img
                className={s.header__card_icon}
                src="/images/icon/price.svg"
                alt="price"
              />
            </span>
            <span className={s.header__card_decor} />
            <span className={s.header__card_wrapper}>
              <span>{itemsProduct.length}</span>
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
};
