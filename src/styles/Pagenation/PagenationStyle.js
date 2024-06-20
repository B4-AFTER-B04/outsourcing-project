import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export const PageButton = styled.button`
  background-color: var(--sub-color);
  color: var(--white-color);
  border: none;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--main-color);
  }
  &:disabled {
    background-color: var(--lightgray-color2);
    cursor: not-allowed;
  }
`;
