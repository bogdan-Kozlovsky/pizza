import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { axiosConfig } from 'api/config';
import { PathNavigation } from 'enums/navigation';

type ItemType = {
  imageUrl: string;
  title: string;
  price: number;
};

export const FullProduct = () => {
  const { id } = useParams();

  const [items, setItems] = useState<ItemType>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get(`${axiosConfig.baseURL}/${id}`);
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
    <div>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={items.imageUrl} alt="image" />
      <h2>{items.title}</h2>
      <h4>{items.price} Uau</h4>
      <Link to={PathNavigation.PRODUCT}>
        <button type="button" className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
