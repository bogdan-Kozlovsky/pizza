import React from 'react';

import s from 'component/header/style.module.scss';

type CloseSearchPropsType = {
  onClearClick: () => void;
};

export const CloseSearch = ({ onClearClick }: CloseSearchPropsType) => (
  <p className={s.header__clear} role="presentation" onClick={onClearClick}>
    X
  </p>
);
