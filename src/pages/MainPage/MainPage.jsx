import { useState } from 'react';
import Map from '../../components/Map';
import SideBar from '../../components/SideBar';
import { StMain } from '../../styles/mainPage/mainPageStyle';
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

export default MainPage;
