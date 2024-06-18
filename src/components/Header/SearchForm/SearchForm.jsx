import React, { useState } from 'react';
import styled from 'styled-components';

const SearchForm = () => {
  const [showInput, setShowInput] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowInput((prev) => !prev);
  };
  return (
    <form>
      <Button onClick={handleClick}>searchIcon</Button>
      <Input show={showInput} placeholder="서울 맛집 검색" />
    </form>
  );
};

export default SearchForm;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Input = styled.input`
  width: ${(props) => (props.show ? '200px' : '0')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  padding: ${(props) => (props.show ? '5px 10px' : '0')};
  border: ${(props) => (props.show ? '1px solid #ccc' : 'none')};
  transition: all 0.3s ease;
  outline: none;
`;
