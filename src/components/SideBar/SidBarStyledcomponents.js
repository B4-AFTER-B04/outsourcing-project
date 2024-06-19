import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '-100px')};
  height: 100%;
  background-color: #2c3e50;
  border-right: 1px solid #34495e;
  transition: left 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const SideBarButton = styled.button`
  position: absolute;
  top: 20px;
  right: -50px;
  width: 40px;
  height: 40px;
  background-color: black;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #16a085;
    transform: rotate(90deg);
  }
`;

export const SideBarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SideBarMenuItem = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  margin: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: white;
  color:#FFA634; 
  border: 1px solid #2c3e50;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #1abc9c;
    color: #ffffff;
  }
`;

