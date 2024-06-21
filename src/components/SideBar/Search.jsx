import { useState } from 'react';
import {
  LogoImg,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchInputWrapper
} from '../../styles/SideBar/searchStyle';
import { useNavigate } from 'react-router-dom';

const Search = ({ shops, setFilteredShops, setTotalPages, setPage, sideBarRef }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
      if (sideBarRef.current) {
        sideBarRef.current.scrollTop = 0;
      }
    }
  };

  const handleLogoClick = () => {
    // 검색 상태와 필터링된 결과 초기화
    setSearchTerm('');
    setFilteredShops(shops);
    setTotalPages(Math.ceil(shops.length / 10));
    setPage(1);
    // 메인 페이지로 이동
    if (sideBarRef.current) {
      sideBarRef.current.scrollTop = 0;
    }
    navigate('/'); // 스크롤을 상단으로 이동
  };

  return (
    <SearchContainer>
      <LogoImg src="src/styles/assets/Eat Site Seoul.png" onClick={handleLogoClick} />
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
