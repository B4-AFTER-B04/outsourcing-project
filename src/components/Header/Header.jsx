import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <Div>
        <SearchForm />
      </Div>
      {/* <Logo onClick={() => navigate('/')}>logo</Logo> */}
      <Button onClick={() => navigate('/')}>뒤로가기</Button>
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
  align-items: center;

  background-color: #419de9;
`;

const Div = styled.div`
  margin: 0 30px;
`;

const Logo = styled.div`
  margin: 0 30px;
  cursor: pointer;

  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  margin: 0 30px;
  cursor: pointer;

  border: none;
  background-color: transparent;
`;
