import { useState } from 'react';
import {
  LogoImg,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchInputWrapper
} from '../../styles/SideBar/searchStyle';

const Search = ({ shops, setFilteredShops, setTotalPages, setPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      const newFilteredShops = shops.filter((shop) => {
        const lowerCaseSearchTerm = e.target.value.toLowerCase();
        return (
          shop?.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
          shop?.genre?.toLowerCase().includes(lowerCaseSearchTerm) ||
          shop?.address?.toLowerCase().includes(lowerCaseSearchTerm)
        );
      });
      setFilteredShops(newFilteredShops);
      setTotalPages(Math.ceil(newFilteredShops.length / 10));
      setPage(1);
    }
  };

  return (
    <SearchContainer>
      <LogoImg src="src/styles/assets/Eat Site Seoul.png" />
      <SearchInputWrapper>
        <SearchIcon src="src/styles/assets/search.png" alt="search" />
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={onChangeSearch}
          onKeyDown={handleSearchSubmit}
          placeholder="검색"
        />
      </SearchInputWrapper>
    </SearchContainer>
  );
};

export default Search;
