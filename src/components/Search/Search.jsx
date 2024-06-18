import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Search = () => {
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // 초기값 불러오기? api 호출
    const initialData = [
      { id: 1, name: '맛있는 식당', genre: '한식', rating: 4.5 },
      { id: 2, name: '행복한 카페', genre: '카페', rating: 4.2 },
      { id: 3, name: '맛있는 피자', genre: '양식', rating: 4.8 }
    ];
    setRestaurants(initialData);
    setFilteredRestaurants(initialData);
  }, []);
  // 여기에다가 호출

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = (query) => {
    const filtered = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredRestaurants(filtered);
  };

  return (
    <div>
      <div>
        <SearchInput type="text" value={search} onChange={handleSearchChange} placeholder="음식점을 검색해주세요" />
        <SearchImg />
      </div>

      {filteredRestaurants.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <ul>
          {filteredRestaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.genre}</p>
              <p>평점 : {restaurant.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
