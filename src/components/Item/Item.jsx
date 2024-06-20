import React, { useState } from 'react';
import {
  InputAderss,
  InputName,
  ModalContent,
  ModalOverlay,
  SideBarItem,
  SideBarMenuItem
} from '../../styles/SideBar/sideBarStyle';
import { SearchCloseButton, SideBarDetailBtn } from '../../styles/common/btnStyle';
import DetailCarousel from '../DetailCarousel';
import Detail from '../../pages/DetailPage/Detail';

const Item = ({ shop }) => {
  const [modalStates, setModalStates] = useState({});

  const toggleModal = (shopId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [shopId]: !prevStates[shopId]
    }));
  };

  const stopBubble = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <SideBarMenuItem onClick={() => setSelectedShop(shop)}>
      <SideBarItem>
        <InputName>{shop.name}</InputName>
        <InputAderss>
          <label htmlFor="adress">주소: </label>
          {shop.address}
        </InputAderss>
        <ul>{shop.loaction}</ul>
      </SideBarItem>
      <DetailCarousel shop={shop} $inModal={false} style={{ zIndex: 500 }} />
      <SideBarDetailBtn type="button" onClick={() => toggleModal(shop.id)}>
        상세보기
      </SideBarDetailBtn>
      {modalStates[shop.id] && (
        <ModalOverlay onClick={() => toggleModal(shop.id)}>
          <ModalContent onClick={stopBubble}>
            <SearchCloseButton type="button" onClick={() => toggleModal(shop.id)}>
              X
            </SearchCloseButton>
            <Detail shop={shop} />
          </ModalContent>
        </ModalOverlay>
      )}
    </SideBarMenuItem>
  );
};

export default Item;
