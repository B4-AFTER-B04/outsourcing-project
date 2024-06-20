import React, { useState } from 'react';
import {
  InputAddress,
  InputName,
  ModalContent,
  ModalOverlay,
  SideBarItem,
  SideBarMenuItem
} from '../../styles/SideBar/sideBarStyle';
import { SearchCloseButton, SideBarDetailBtn } from '../../styles/common/btnStyle';
import DetailCarousel from '../DetailCarousel';
import Detail from '../Detail/Detail';

const Item = ({ shop, setSelectedShop }) => {
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
        <InputAddress>
          <label htmlFor="adress">주소: </label>
          {shop.address}
        </InputAddress>
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
