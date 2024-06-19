import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const SideBarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.isOpen ? '0' : '-260px')};
  height: 1px;
  background-color: #fff;
  border-right: 1px solid #ccc;
  transition: left 0.3s;
`;
export const SideBarButton = styled.button`
  float: right;
`;

export const SideBarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SideBarMenuItem = styled(Link)`
  display: block;
  padding: 1rem;
  margin: 0.5rem;
  font-size: 1.2rem;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  max-width: 90%;
  max-height: 80%;
  overflow: auto;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 1002;
`;
