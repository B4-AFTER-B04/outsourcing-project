import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  &:disabled {
    background-color: var(--lightgray-color2);
    cursor: not-allowed;
  }
`;
