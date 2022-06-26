import React, { useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import { ButtonCart } from 'component/header/buttonCart/ButtonCart';
import { Logo } from 'component/header/logo/Logo';
import { SearchInput } from 'component/header/searchInput/SearchInput';
import s from 'component/header/style.module.scss';
import { HeaderPropsType } from 'component/header/types';
import { useAppSelector } from 'hooks/useAppSelector';
import { selectItemsProduct } from 'store/cart/selectors';

export const Header = (props: HeaderPropsType) => {
  const { searchValue, setValue, onChange } = props;

  const { pathname } = useLocation();

  const itemsProduct = useAppSelector(selectItemsProduct);

  const isMounted = useRef(false);

  const isOpacityElement = pathname !== '/shopping-cart';

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('product', JSON.stringify(itemsProduct));
    }

    isMounted.current = true;
  }, [itemsProduct]);

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
