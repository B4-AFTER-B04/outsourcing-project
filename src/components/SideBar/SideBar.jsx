import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Detail from '../../pages/DetailPage/Detail';
import {
  ModalContent,
  ModalOverlay,
  SideBarContainer,
  SideBarItem,
  SideBarMenu,
  SideBarMenuItem
} from '../../styles/SideBar/sideBarStyle';
import { SearchCloseButton, SideBarDetailBtn, SideBarButton } from '../../styles/common/btnStyle';
import supabase from '../../supabase/supabaseClient';
import Search from './Search';
import DetailCarousel from '../DetailCarousel';

const SideBar = ({ setFilteredShops, setSelectedShop }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredShops, setFilteredShopsLocal] = useState([]);
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
      setFilteredShopsLocal(shops);
      setFilteredShops(shops);
    }
  }, [shops, setFilteredShops]);

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
      <Search
        shops={shops}
        setFilteredShops={(newFilteredShops) => {
          setFilteredShopsLocal(newFilteredShops);
          setFilteredShops(newFilteredShops);
        }}
      />
      <SideBarMenu>
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <SideBarMenuItem key={shop.id} onClick={() => setSelectedShop(shop)}>
              <SideBarItem>
                <ul>{shop.name}</ul>
                <ul>
                  <label htmlFor="adress">주소: </label>
                  {shop.address}
                </ul>
                <ul>{shop.loaction}</ul>
              </SideBarItem>
              <DetailCarousel shop={shop} />
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
