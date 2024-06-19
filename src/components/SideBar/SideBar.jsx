import { useQuery } from '@tanstack/react-query';
import {
  SideBarButton,
  SideBarContainer,
  SideBarMenu,
  SideBarMenuItem,
  ModalOverlay,
  ModalContent,
  CloseButton
} from './SidBarStyledcomponents';
import { useState } from 'react';
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

  const stopBubble = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const fetchRestaurants = async () => {
    const { data } = await supabase.from('restaurants').select('*').order(`rating`, { ascending: true });
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
    return <div>loading..</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarButton onClick={toggleSidebar}>{isOpen ? '👈' : '👉'}</SideBarButton>
      <label htmlFor="">검색창</label>
      <input type="text" />
      <SideBarMenu>
        {shops.map((shop) => (
          <SideBarMenuItem key={shop.id}>
            이름: {shop.name}
            장르: {shop.genre}
            별점: {shop.rating}
            주소: {shop.address}
            위치: {shop.location}
            사진: {shop.img}
            <button type="button" onClick={() => toggleModal(shop.id)}>
              상세보기
            </button>
            {modalStates[shop.id] && (
              <ModalOverlay onClick={() => toggleModal(shop.id)}>
                <ModalContent onClick={stopBubble}>
                  <CloseButton type="button" onClick={() => toggleModal(shop.id)}>
                    X
                  </CloseButton>
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
