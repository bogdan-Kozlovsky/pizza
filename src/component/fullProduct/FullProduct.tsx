import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { axiosConfig } from 'api/config';
import { Star } from 'component/fullProduct/star/Star';
import s from 'component/fullProduct/style.module.scss';
import { PathNavigation } from 'enums/navigation';
import { ProductItemType } from 'store/product/types';

type ItemType = {
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
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
    return <>Ти не туди потрапив</>;
  }

  const { price, rating, name, imageUrl } = items;

  return (
    <div className={s.fullProduct}>
      <img src={imageUrl} alt="" />
      <div className={s.fullProduct__list}>
        <h2>{name}</h2>
        <h2>{price} Uau</h2>
      </div>

      <Star rating={rating} />

      <Link to={PathNavigation.PRODUCT}>
        <button type="button">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
