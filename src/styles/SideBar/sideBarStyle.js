import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 400px;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.$isopen ? '0' : '-410px')};
  height: 100vh;
  background-color: white;
  border-right: 1px solid #ccc;
  transition: left 0.5s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideBarMenu = styled.div`
  margin-left: 10px;
  list-style-type: none;
  padding: 0;
  height: calc(100vh - 100px);
  background-color: var(--white-color);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
    border: 3px solid #f1f1f1;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const SideBarMenuItem = styled.div`
  display: block;
  padding: 1rem 1.5rem;
  margin-top: 5px;
  width: 330px;
  font-size: 12px;
  background-color: var(--white-color);
  color: black;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--sub-color);
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
  z-index: 2;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  max-width: 90%;
  overflow-y: auto;
  max-height: 90%;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
    border: 3px solid #f1f1f1;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const InputName = styled.ul`
  font-size: x-large;
  line-height: 40px;
  font-weight: bolder;
`;
export const InputAderss = styled.ul`
  font-size: 13px;
  line-height: 20px;
  text-decoration: underline;
`;
