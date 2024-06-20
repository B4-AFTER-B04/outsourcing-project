import React, { useState } from 'react';
import Map from '../../components/Map';
import Search from '../../components/SideBar/Search';
import SideBar from '../../components/SideBar/SideBar';
import { StMain } from '../../styles/mainPage/mainPageStyle';
const MainPage = () => {
  return (
    <StMain>
      <Map />
      <SideBar>
        <Search />
      </SideBar>
    </StMain>
  );
};



export default MainPage;


