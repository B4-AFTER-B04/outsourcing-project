import React, { useState } from 'react';
import { SearchContainer, SearchInputWrapper, SearchIcon, SearchInput, LogoImg } from '../../styles/SideBar/searchStyle';

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

  return (
    <SearchContainer>
      <LogoImg
      src="src/styles/assets/Eat Site Seoul.png"
      style={{marginLeft:'100px',height:'100px'}}
       />
      <SearchInputWrapper>
        <SearchIcon src="src/styles/assets/search.png" alt="search" />
        <SearchInput type="text" value={searchTerm} onChange={handleSearchChange} placeholder="서울 맛집 검색" />
      </SearchInputWrapper>
    </SearchContainer>
  );
};

export default Search;
