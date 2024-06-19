
import { useQuery } from '@tanstack/react-query';
import { SideBarButton, SideBarContainer, SideBarMenu, SideBarMenuIte, } from '../SideBar/SidBarStyledcomponents'
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  SideBarButton,
  SideBarContainer,
  SideBarMenu,
  SideBarMenuItem
} from '../SideBar/SidBarStyledcomponents';
import supabase from '../../supabase/supabaseClient';
import { useEffect, useState } from 'react';
import Search from './Search';
import Detail from '../../pages/DetailPage/Detail';
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredShops, setFilteredShops] = useState([]);
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

  useEffect(() => {
    if (shops) {
      setFilteredShops(shops);
    }
  }, [shops]);

  if (isPending) {
    <div>loading...</div>;
    return;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarButton onClick={toggleSidebar}>{isOpen ? '✕' : '☰'}</SideBarButton>
      <label htmlFor="">검색창</label>
      <input type="text" />
      <Search shops={shops} setFilteredShops={setFilteredShops} />
      <SideBarMenu>
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <SideBarMenuItem key={shop.id}>
              이름:{shop.name}
              장르:{shop.genre}
              별점:{shop.rating}
              주소:{shop.address}
              위치:{shop.loaction}
              사진:{shop.img}
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
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </SideBarMenu>
    </SideBarContainer>
  );
};

export default SideBar;
