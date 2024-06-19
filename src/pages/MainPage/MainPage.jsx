import React from 'react';
import styled from 'styled-components';
import Map from '../../components/Map';
import Search from '../../components/SideBar/Search';
import SideBar from '../../components/SideBar/SideBar';

const MainPage = () => {
  return (
    <StMain>
      {/* <Map /> */}
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

const MainContainer = styled.div`
  display: flex;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  max-width: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
