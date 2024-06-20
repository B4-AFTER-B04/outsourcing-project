import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import Detail from '../../pages/DetailPage/Detail';
import {
  InputAddress,
  InputName,
  ModalContent,
  ModalOverlay,
  SideBarContainer,
  SideBarItem,
  SideBarMenu,
  SideBarMenuItem
} from '../../styles/SideBar/sideBarStyle';
import { SearchCloseButton, SideBarButton, SideBarDetailBtn } from '../../styles/common/btnStyle';
import supabase from '../../supabase/supabaseClient';
import DetailCarousel from '../DetailCarousel';
import Pagination from './Pagination';
import Search from './Search';

const SideBar = ({ setFilteredShops, setSelectedShop }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredShops, setFilteredShopsLocal] = useState([]);
  const [modalStates, setModalStates] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentShops, setCurrentShops] = useState([]);

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

  const fetchRestaurants = useCallback(async () => {
    const { data, error } = await supabase.from('restaurants').select('*').order('rating', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }, []);

  const {
    data: shops,
    isPending,
    isError
  } = useQuery({
    queryKey: ['shops'],
    queryFn: () => fetchRestaurants()
  });

  useEffect(() => {
    if (shops) {
      setFilteredShopsLocal(shops);
      setTotalPages(Math.ceil(shops.length / 10));
    }
  }, [shops, setFilteredShops]);

  useEffect(() => {
    const startIndex = (page - 1) * 10;
    const paginatedShops = filteredShops.slice(startIndex, startIndex + 10);
    setCurrentShops(paginatedShops);
    setFilteredShops(paginatedShops);
  }, [page, filteredShops]);

  if (isPending) {
    <div>loading..</div>;
    return;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <SideBarContainer $isopen={isOpen}>
      <SideBarButton $isopen={isOpen} onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </SideBarButton>
      <Search
        shops={shops}
        setFilteredShops={(newFilteredShops) => {
          setFilteredShopsLocal(newFilteredShops);
        }}
        setTotalPages={setTotalPages}
        setPage={setPage}
      />
      <SideBarMenu>
        {currentShops.length > 0 ? (
          currentShops.map((shop) => (
            <SideBarMenuItem key={shop.id} onClick={() => setSelectedShop(shop)}>
              <SideBarItem>
                <InputName>{shop.name}</InputName>
                <InputAddress>
                  <label htmlFor="address">주소: </label>
                  {shop.address}
                </InputAddress>
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
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </SideBarMenu>
    </SideBarContainer>
  );
};
export default SideBar;
