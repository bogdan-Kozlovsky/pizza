import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { EmptyShoppingCart } from 'component/emptyShoppingCart/EmptyShoppingCart';
import { Header } from 'component/header/Header';
import { Product } from 'component/product/Product';
import { ShoppingCart } from 'component/shoppingCart/ShoppingCart';
import { PathNavigation } from 'enums/navigation';

export const App = () => (
  <div className="wrapper">
    <div className="container">
      <Header />

      <Routes>
        <Route path={PathNavigation.PRODUCT} element={<Product />} />
        <Route path={PathNavigation.SHOPPING_CART} element={<ShoppingCart />} />
        <Route
          path={PathNavigation.EMPTY_SHOPPING_CART}
          element={<EmptyShoppingCart />}
        />
      </Routes>
    </div>
  </div>
);
