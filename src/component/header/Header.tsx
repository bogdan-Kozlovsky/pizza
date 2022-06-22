import React from 'react';

import { useLocation } from 'react-router-dom';

import { ButtonCart } from 'component/header/buttonCart/ButtonCart';
import { Logo } from 'component/header/logo/Logo';
import { SearchInput } from 'component/header/searchInput/SearchInput';
import s from 'component/header/style.module.scss';
import { HeaderPropsType } from 'component/header/types';

export const Header = (props: HeaderPropsType) => {
  const { searchValue, setValue, onChange } = props;

  const { pathname } = useLocation();

  const isOpacityElement = pathname !== '/shopping-cart';

  return (
    <div>
      <div className={s.header__wrapper}>
        <Logo />

        {isOpacityElement && (
          <SearchInput
            searchValue={searchValue}
            setValue={setValue}
            onChange={onChange}
          />
        )}

        <div>{isOpacityElement && <ButtonCart />}</div>
      </div>
    </div>
  );
};
