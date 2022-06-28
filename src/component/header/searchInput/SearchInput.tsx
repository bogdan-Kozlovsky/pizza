import React from 'react';

import search from 'assets/images/icon/search.svg';
import { CloseSearch } from 'component/header/closeSeact/CloseSearch';
import { SearchInputPropsType } from 'component/header/searchInput/types';
import s from 'component/header/style.module.scss';

export const SearchInput = (props: SearchInputPropsType) => {
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

      {searchValue && <CloseSearch onClearClick={onClearClick} />}

      <button className={s.header__search_btn} type="button">
        <img className={s.header__search_icon} src={search} alt="" />
      </button>
    </label>
  );
};
