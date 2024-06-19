import styled from 'styled-components';

export const SideBarButton = styled.button`
  position: absolute;
  top: 20px;
  right: -70px;
  width: 40px;
  height: 40px;
  background-color: #f56652;
  border: none;
  border-radius: 15%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ffa634;
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
export const SideBarDetailBtn = styled.button``;
