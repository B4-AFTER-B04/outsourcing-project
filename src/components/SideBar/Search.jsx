import React, { useState } from 'react';
import { SearchImg, SearchInput } from '../../styles/SideBar/searchStyle';


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
      <SearchInput
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="서울 맛집 검색" 
      />
    </div>
  );
};

export default Search;
