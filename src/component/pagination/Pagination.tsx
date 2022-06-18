import React from 'react';

import ReactPaginate from 'react-paginate';

import s from 'component/pagination/style.module.scss';
import { PaginationPropsType } from 'component/pagination/types';

const INITIAL_VALUES = 1;
export const Pagination = (props: PaginationPropsType) => {
  const { setActiveIndex, activeIndex } = props;
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => setActiveIndex(event.selected + INITIAL_VALUES)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={activeIndex - INITIAL_VALUES}
    />
  );
};
