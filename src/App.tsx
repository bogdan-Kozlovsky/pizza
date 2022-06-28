import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { EmptyShoppingCart } from 'component/emptyShoppingCart/EmptyShoppingCart';
import { FullProduct } from 'component/fullProduct/FullProduct';
import { Header } from 'component/header/Header';
import { Product } from 'component/product/Product';
import { ShoppingCart } from 'component/shoppingCart/ShoppingCart';
import { PathNavigation } from 'enums/navigation';
import { useInput } from 'hooks/useInput';
import useTheme from 'hooks/useThema';
import useDebounce from 'utils/useDebounce';

const WAITING_TIME = 400;

export const App = () => {
  const { onChange, value, setValue } = useInput('');

  const { theme, toggleTheme } = useTheme();

  const searchValue = useDebounce(value, WAITING_TIME);

  return (
    <div className={` wrapper ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="container">
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          setValue={setValue}
          searchValue={value}
          onChange={onChange}
        />
        <Routes>
          <Route path="/:id" element={<FullProduct />} />
          <Route
            path={PathNavigation.PRODUCT}
            element={<Product searchValue={searchValue} />}
          />
          <Route path={PathNavigation.SHOPPING_CART} element={<ShoppingCart />} />
          <Route
            path={PathNavigation.EMPTY_SHOPPING_CART}
            element={<EmptyShoppingCart />}
          />
        </Routes>
      </div>
    </div>
  );
};
