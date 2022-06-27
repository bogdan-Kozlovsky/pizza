import React from 'react';

type ButtonCategoryPropsType = {
  onCloseCategoryClick: () => void;
};

export const ButtonCategory = ({ onCloseCategoryClick }: ButtonCategoryPropsType) => (
  <button onClick={onCloseCategoryClick} type="button" className="btnClose">
    Категорії
    <div className="isClose">
      <span />
      <span />
      <span />
    </div>
  </button>
);
