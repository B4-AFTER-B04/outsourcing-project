import { useState } from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.isOpen ? '0' : '-260px')};
  height: 800px;
  background-color: whitesmoke;
  border-right: 1px solid black;
  transition: left 0.3s;
`;

const SideBarButton = styled.button`
  float: right;
`;

const SideBarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SideBarMenuItem = styled.li`
  margin-bottom: 500px;
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarButton onClick={toggleSidebar}>{isOpen ? '👈' : '👉'}</SideBarButton>
      <label htmlFor="">검색창</label>
      <input type="text" />
      <SideBarMenu>
        <SideBarMenuItem>음식점</SideBarMenuItem>
      </SideBarMenu>
    </SideBarContainer>
  );
};

export default SideBar;
