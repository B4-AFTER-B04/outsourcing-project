import React, { useState } from 'react';
import styled from 'styled-components';
import search from '../../styles/assets/search.png';

const SearchContainer = styled.div`
  position: relative;
  width: 320px;
`;

const SearchInput = styled.input`
  display: block;
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
  padding: 0 40px 0 12px;
`;

const SearchImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Search = ({ shops, setFilteredShops }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const newFilteredShops = shops.filter((shop) => shop.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredShops(newFilteredShops);
  };

  return (
    <SearchContainer>
      <SearchImgWrapper>
        <img src={search} alt="search" />
      </SearchImgWrapper>
      <SearchInput type="text" value={searchTerm} onChange={handleSearchChange} placeholder="서울 맛집 검색" />
    </SearchContainer>
  );
};

export default Search;
