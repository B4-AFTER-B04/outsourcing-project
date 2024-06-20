import React from 'react';
import { PaginationWrapper, PageButton } from '../../styles/Pagenation/PagenationStyle';



export default function Pagination({ page, setPage, totalPages }) {
  return (
    <PaginationWrapper>
      <PageButton onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
      ⬅
      </PageButton>

      <PageButton onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
      ➡
      </PageButton>
    </PaginationWrapper>
  );
}
