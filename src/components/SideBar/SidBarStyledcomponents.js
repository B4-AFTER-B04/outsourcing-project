import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const SideBarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.isOpen ? '0' : '-260px')};
  height: 1px;
  background-color: #fff;
  border-right: 1px solid #ccc;
  transition: left 0.3s;

  z-index: 2;
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
