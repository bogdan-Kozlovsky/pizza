import React from 'react';

import { ButtonCategoryPropsType } from 'component/sort/buttonCategory/types';

export const ButtonCategory = (props: ButtonCategoryPropsType) => {
  const { onCloseCategoryClick, valueButtonCategory } = props;
  return (
    <button onClick={onCloseCategoryClick} type="button" className="btnClose">
      {valueButtonCategory}
      <div className="isClose">
        <span />
        <span />
        <span />
      </div>
    </button>
  );
};
