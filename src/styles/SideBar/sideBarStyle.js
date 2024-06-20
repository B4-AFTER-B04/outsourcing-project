import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.$isopen ? '0' : '-300px')};
  height: 100vh;
  background-color: white;
  border-right: 1px solid #ccc;
  transition: left 0.5s;
`;

export const SideBarMenu = styled.div`
  list-style-type: none;
  padding: 0;
  height: calc(100vh - 100px);
  background-color: var(--sidebar-color);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    border: 3px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const SideBarMenuItem = styled.div`
  display: block;
  padding: 1rem 1.5rem;
  margin-top: 2px;
  font-size: 12px;
  background-color: var(--sidebar-color);
  color: black;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--sub-color);
    color: #ffffff;
  }
`;

export const SideBarImg = styled.div`
  margin: 10px;
`;

export const SideBarItem = styled.section`
  display: contents;
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
