import React, { useState } from 'react';
import styled from 'styled-components';
import Map from '../../components/Map';
import Search from '../../components/SideBar/Search';
import Detail from '../DetailPage/Detail';
import SideBar from '../../components/SideBar/SideBar';

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

const StMain = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 80px;
  box-sizing: border-box;
  display: flex;
`;

export default MainPage;


