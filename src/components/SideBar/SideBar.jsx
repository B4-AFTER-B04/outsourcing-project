import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import Detail from '../../pages/DetailPage/Detail';
import {
  InputAderss,
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
import Pagination from './Pagination';
import Search from './Search';

const SideBar = ({ setFilteredShops, setSelectedShop }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredShops, setFilteredShopsLocal] = useState([]);
  const [modalStates, setModalStates] = useState({});
  const [page, setPage] = useState(1);
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
  const fetchRestaurants = useCallback(async (page) => {
    const pageSize = 10;
    const range = (page - 1) * pageSize;

    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .order('rating', { ascending: true })
      .range(range, range + pageSize - 1);

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
    queryKey: ['shops', page],
    queryFn: ({ queryKey }) => fetchRestaurants(queryKey[1])
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
    <SideBarContainer $isopen={isOpen}>
      <SideBarButton $isopen={isOpen} onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </SideBarButton>
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
                <InputName>{shop.name}</InputName>
                <InputAderss>
                  <label htmlFor="adress">주소: </label>
                  {shop.address}
                </InputAderss>
                <ul>{shop.loaction}</ul>
              </SideBarItem>
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
        <Pagination page={page} totalPages={100} setPage={setPage} />
      </SideBarMenu>
    </SideBarContainer>
  );
};
export default SideBar;
