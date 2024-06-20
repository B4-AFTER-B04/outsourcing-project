import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #ff7300;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b35700;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <PaginationWrapper>
      <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
        👈
      </Button>

      <Button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
        👉
      </Button>
    </PaginationWrapper>
  );
}
