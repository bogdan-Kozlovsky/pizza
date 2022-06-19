import { ChangeEvent } from 'react';

export type HeaderPropsType = {
  searchValue: string;
  setValue: (searchValue: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
