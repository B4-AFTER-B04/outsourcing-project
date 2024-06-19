import { useQuery } from '@tanstack/react-query';
import { SideBarButton, SideBarContainer, SideBarMenu, SideBarMenuItem } from './SidBarStyledcomponents';
import { useState } from 'react';
import styled from 'styled-components';
import Detail from '../../pages/DetailPage/Detail';
import supabase from '../../supabase/supabaseClient';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [modalStates, setModalStates] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = (shopId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [shopId]: !prevStates[shopId]
    }));
  };

  const fetchRestaurants = async () => {
    const { data } = await supabase.from('restaurants').select('*');
    return data;
  };

  const {
    data: shops,
    isPending,
    isError
  } = useQuery({
    queryKey: ['shops'],
    queryFn: fetchRestaurants
  });
  if (isPending) {
    <div>loding..</div>;
    return;
  }
  if (isError) {
    <div>Error</div>;
    return;
  }

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarButton onClick={toggleSidebar}>{isOpen ? '👈' : '👉'}</SideBarButton>
      <label htmlFor="">검색창</label>
      <input type="text" />
      <SideBarMenu>
        {shops.map((shop) => (
          <SideBarMenuItem key={shop.id}>
            이름:{shop.name}
            장르:{shop.genre}
            별점:{shop.rating}
            주소:{shop.address}
            위치:{shop.loaction}
            사진:{shop.img}
            <button onClick={() => toggleModal(shop.id)}>상세보기</button>
            {modalStates[shop.id] && (
              <ModalOverlay onClick={() => toggleModal(shop.id)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <CloseButton onClick={() => toggleModal(shop.id)}>X</CloseButton>
                  <Detail shop={shop} />
                </ModalContent>
              </ModalOverlay>
            )}
          </SideBarMenuItem>
        ))}
      </SideBarMenu>
    </SideBarContainer>
  );
};

export default SideBar;

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background: white;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  max-width: 90%;
  max-height: 80%;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
