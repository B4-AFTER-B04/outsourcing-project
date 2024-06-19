import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.isOpen ? '0' : '-300px')};
  height: 1px;
  background-color: #fff;
  border-right: 1px solid #ccc;
  transition: left 0.3s;
`;

export const SideBarButton = styled.button`
  position: absolute;
  top: 20px;
  right: -70px;
  width: 40px;
  height: 40px;
  background-color: #F56652;
  border: none;
  border-radius: 15%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #FFA634;
    transform: rotateY(180deg);
  }
`;

export const SideBarMenu = styled.div`
  list-style-type: none;
  padding: 0;
  background-color: white;
`;

export const SideBarMenuItem = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  margin: 0.5rem 1rem;
  font-size:12px;
  background-color: #fffbf4;
  color: black;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ffa634;
    color: #ffffff;
  }

.img { 
    margin: 10px;

}

`;

// const MainContainer = styled.div`
//   display: flex;
// `;

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
`;

export const ModalContent = styled.div`
  background: white;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  max-width: 90%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;