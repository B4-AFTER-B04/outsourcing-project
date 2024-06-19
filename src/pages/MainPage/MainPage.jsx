import { useState } from 'react';
import styled from 'styled-components';
import Map from '../../components/Map';
import SideBar from '../../components/SideBar';

const MainPage = () => {
  const [filteredShops, setFilteredShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  return (
    <StMain>
      <Map filteredShops={filteredShops} selectedShop={selectedShop} />
      <SideBar setFilteredShops={setFilteredShops} setSelectedShop={setSelectedShop} />
    </StMain>
  );
};

const StMain = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
`;

export default MainPage;
