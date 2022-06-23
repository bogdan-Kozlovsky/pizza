import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { axiosConfig } from 'api/config';
import s from 'component/fullProduct/style.module.scss';
import { PathNavigation } from 'enums/navigation';
import { ProductItemType } from 'store/slices/product/types';

type ItemType = {
  imageUrl: string;
  name: string;
  price: number;
};

export const FullProduct = () => {
  const { id } = useParams();

  const [items, setItems] = useState<ItemType>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get<ProductItemType>(`${axiosConfig.baseURL}/${id}`);
        setItems(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchItems();
  }, []);

  if (!items) {
    return <>Загрузка...</>;
  }

  return (
    <div className={s.fullProduct}>
      <img src={items.imageUrl} alt="" />
      <div className={s.fullProduct__list}>
        <h2>{items.name}</h2>
        <h2>{items.price} Uau</h2>
      </div>
      <Link to={PathNavigation.PRODUCT}>
        <button type="button">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
