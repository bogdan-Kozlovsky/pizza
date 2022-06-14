import React from 'react';

import { Header } from 'component/header/Header';
import { Product } from 'component/product/Product';
import { Sort } from 'component/sort/Sort';

export const App = () => (
  <div className="wrapper">
    <div className="container">
      <Header />
      <Sort />
      <Product />
    </div>
  </div>
);
