import React from 'react';

import { Route, Routes } from 'react-router-dom';

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
      </Routes>
    </div>
  </div>
);
