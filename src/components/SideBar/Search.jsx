import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../styles/assets/search.png';

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 320px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  background-color: var(--white-color);
  border-radius: 8px;
  border: solid 1px var(--lightgray-color);
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.01em;
  padding: 0 12px 0 48px;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 16px;
  width: 24px;
  height: 24px;
`;

const Search = ({ shops, setFilteredShops }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const newFilteredShops = shops.filter((shop) => {
      const lowerCaseSearchTerm = e.target.value.toLowerCase();
      return (
        shop.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        shop.genre.toLowerCase().includes(lowerCaseSearchTerm) ||
        shop.address.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });
    setFilteredShops(newFilteredShops);
  };

  //     shop.name.toLowerCase().includes(e.target.value.toLowerCase()));
  //   setFilteredShops(newFilteredShops);
  // };

  return (
    <SearchWrapper>
      <SearchIcon src={searchIcon} alt="search" />
      <SearchInput type="text" value={searchTerm} onChange={handleSearchChange} placeholder="서울 맛집 검색" />
    </SearchWrapper>
  );
};

export default Search;
