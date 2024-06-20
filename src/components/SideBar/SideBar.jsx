import { useQuery } from '@tanstack/react-query';
import {
  ModalContent,
  ModalOverlay,
  SideBarContainer,
  SideBarMenu,
  SideBarMenuItem,
  SideBarImg,
  SideBarItem
} from '../../styles/SideBar/sideBarStyle';
import { SearchCloseButton, SideBarDetailBtn, SideBarButton } from '../../styles/common/btnSyle';
import supabase from '../../supabase/supabaseClient';
import { useEffect, useState } from 'react';
import Search from './Search';
import Detail from '../../pages/DetailPage/Detail';
import DetailCarousel from '../DetailCarousel';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredShops, setFilteredShops] = useState([]);
  const [modalStates, setModalStates] = useState({});
  const dummy = `https://velog.velcdn.com/images/kgh9393/post/7f78fd8d-95e8-40f7-be28-271cd172f7e5/image.jpeg`;
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
    <div>loading..</div>;
    return;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarButton onClick={toggleSidebar}>{isOpen ? '✕' : '☰'}</SideBarButton>
      <Search shops={shops} setFilteredShops={setFilteredShops} />
      <SideBarMenu>
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <SideBarMenuItem key={shop.id}>
              <SideBarItem>
                <ul>
                  <label htmlFor="name">상호명: </label>
                  {shop.name}
                </ul>
                <ul>
                  <label htmlFor="genre"></label>
                  {shop.genre}
                </ul>
                <ul>
                  <label htmlFor="rating">평점: </label>
                  {shop.rating}
                </ul>
                <ul>
                  <label htmlFor="adress">주소: </label>
                  {shop.address}
                </ul>
                <ul>{shop.loaction}</ul>
              </SideBarItem>
              <SideBarImg style={{ width: '80px', height: '80px' }}>{shop.img}</SideBarImg>
              {/* <img src={shop.img} /> */}
              {/* <DetailCarousel shop={shop} /> */}

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
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </SideBarMenu>
    </SideBarContainer>
  );
};
export default SideBar;
