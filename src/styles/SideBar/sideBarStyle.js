import styled from 'styled-components';

export const SideBarContainer = styled.div`
  max-width: 400px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.$isopen ? '0' : '-410px')};
  height: 100vh;
  background-color: white;
  border-right: 1px solid var(--lightgray-color2);
  transition: left 0.5s;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const SideBarMenu = styled.div`
  margin-left: 10px;
  list-style-type: none;
  padding: 10px;
  height: calc(100vh - 100px);
  background-color: var(--white-color);
  overflow-y: auto;
  overflow-x: hidden;
  margin: 20px 0;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: var(--lightgray-color);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--darkgray-color);
    border-radius: 5px;
    border: 3px solid var(--lightgray-color);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--darkgray-color2);
  }
`;

export const SideBarMenuItem = styled.div`
  display: block;
  /* padding: 1rem 1.5rem; */
  padding: 20px;
  border: 1px solid var(--lightgray-color2);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--sub-color2);
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
  z-index: 1000;
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
  z-index: 1001;

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

export const InputName = styled.p`
  font-size: 20px;
  line-height: 34px;
  font-weight: 800;
`;

export const InputAddress = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 34px;
`;

export const BlankItems = styled.div`
  text-align: center;
`;
