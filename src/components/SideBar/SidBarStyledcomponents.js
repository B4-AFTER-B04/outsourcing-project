import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0px;
  left: ${(props) => (props.isOpen ? '0' : '-260px')};
  height: 100vh; /* 전체 화면 높이로 설정 */
  background-color: #fff;
  border-right: 1px solid #ccc;
  transition: left 0.3s;
`;

export const SideBarButton = styled.button`
  float: right;
`;

export const SideBarMenu = styled.div`
  list-style-type: none;
  padding: 0;
  height: calc(100vh - 100px); /* 전체 높이에서 버튼과 검색창 높이를 제외한 값으로 설정 */
  overflow-y: auto;
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
