import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <div>logo - fn: gohome</div>
      <div>search</div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  width: 100%;
  height: 40px;

  padding: 10px;

  display: flex;
  justify-content: space-between;

  background-color: #ffa634;
`;
