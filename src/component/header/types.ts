import { ChangeEvent } from 'react';

export type HeaderPropsType = {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
