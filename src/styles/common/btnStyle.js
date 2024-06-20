import styled from 'styled-components';

export const SideBarButton = styled.button`
  position: absolute;
  top: 20px;
  right: -70px;
  width: 40px;
  height: 40px;
  background-color: var(--main-color);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--sub-color);
    transform: rotateY(180deg);
  }
`;

export const SearchCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const SideBarDetailBtn = styled.button`
  /* border: 1px solid black; */
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
  color: var(--white-color);
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background: var(--main-color);
  /* overflow: hidden; */
  z-index: 0;
`;
