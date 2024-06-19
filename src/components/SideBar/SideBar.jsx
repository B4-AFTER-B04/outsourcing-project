import { useQuery } from '@tanstack/react-query';
import { SideBarButton, SideBarContainer, SideBarMenu, SideBarMenuItem } from './SidBarStyledcomponents';
import supabase from '../../supabase/supabaseClient';
import { useEffect, useState } from 'react';
import Search from './Search';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredShops, setFilteredShops] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
    <div>Error</div>;
    return;
  }

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarButton onClick={toggleSidebar}>{isOpen ? '👈' : '👉'}</SideBarButton>
      <Search shops={shops} setFilteredShops={setFilteredShops} />
      <SideBarMenu>
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <SideBarMenuItem key={shop.id} to={`/detail/${shop.id}`}>
              이름:{shop.name}
              장르:{shop.genre}
              별점:{shop.rating}
              주소:{shop.address}
              위치:{shop.loaction}
              사진:{shop.img}
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
