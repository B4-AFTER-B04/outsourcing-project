import React, { useState } from 'react';
import styled from 'styled-components';
import { SideBarMenu, SideBarMenuItem } from './SidBarStyledcomponents';

const SearchInput = styled.input`
  display: block;
  position: relative;
  width: 320px;
  height: 48px;
  background-color: var(--white-color);
  border-radius: 8px;
  border: solid 1px var(--lightgray-color);
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.01em;
  padding: 0 12px;
`;

const SearchImg = styled.img`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  width: 30px;
  src: url('src/styles/assets/search.png');
`;

const Search = ({ shops, setFilteredShops }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const newFilteredShops = shops.filter((shop) => shop.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredShops(newFilteredShops);
  };

  return (
    <div>
      <SearchImg />
      <SearchInput type="text" value={searchTerm} onChange={handleSearchChange} placeholder="서울 맛집 검색" />
    </div>
  );
};

export default Search;
