import { ChangeEvent } from 'react';

export type SearchInputPropsType = {
  searchValue: string;
  setValue: (searchValue: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
