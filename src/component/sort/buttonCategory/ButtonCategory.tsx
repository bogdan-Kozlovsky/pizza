import React from 'react';

type ButtonCategoryPropsType = {
  onCloseCategoryClick: () => void;
  valueButtonCategory: string;
};

export const ButtonCategory = ({
  onCloseCategoryClick,
  valueButtonCategory,
}: ButtonCategoryPropsType) => (
  <button onClick={onCloseCategoryClick} type="button" className="btnClose">
    {valueButtonCategory}
    <div className="isClose">
      <span />
      <span />
      <span />
    </div>
  </button>
);
