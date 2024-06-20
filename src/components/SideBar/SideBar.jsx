import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { SideBarContainer, SideBarMenu } from '../../styles/SideBar/sideBarStyle';
import { SideBarButton } from '../../styles/common/btnStyle';

import supabase from '../../supabase/supabaseClient';
import Pagination from './Pagination';
import Search from './Search';
import Item from '../Item';

const SideBar = ({ setFilteredShops, setSelectedShop }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredShops, setFilteredShopsLocal] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentShops, setCurrentShops] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
    return <div>loading..</div>;
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
          currentShops.map((shop) => <Item key={shop.id} shop={shop} setSelectedShop={setSelectedShop} />)
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </SideBarMenu>
    </SideBarContainer>
  );
};
export default SideBar;
