import { PaginationWrapper } from '../../styles/Pagenation/PagenationStyle';
import { PageButton } from '../../styles/common/btnStyle';

export default function Pagination({ page, setPage, totalPages }) {
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <PaginationWrapper>
      <PageButton onClick={goToPreviousPage} disabled={page === 1}>
        ⬅
      </PageButton>

      <PageButton onClick={goToNextPage} disabled={page === totalPages || totalPages === 0}>
        ➡
      </PageButton>
    </PaginationWrapper>
  );
}
