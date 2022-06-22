import React from 'react';

import s from 'component/header/style.module.scss';
import { HeaderPropsType } from 'component/header/types';

export const SearchInput = (props: HeaderPropsType) => {
  const { searchValue, setValue, onChange } = props;

  const onClearClick = () => {
    setValue('');
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={s.header__label}>
      <input
        value={searchValue}
        onChange={onChange}
        className={s.header__input}
        type="text"
      />

      {searchValue && (
        <p className={s.header__clear} role="presentation" onClick={onClearClick}>
          X
        </p>
      )}
      <button className={s.header__search_btn} type="button">
        <img className={s.header__search_icon} src="/images/icon/search.svg" alt="" />
      </button>
    </label>
  );
};
