import { useQuery } from '@tanstack/react-query';
import { SideBarButton, SideBarContainer, SideBarMenu, SideBarMenuItem } from './SidBarStyledcomponents';
import supabase from './supabaseClient';
import { useState } from 'react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const fetchRestaurants = async () => {
    const { data } = await supabase.from('restaurants').select('*');
    return data;
  };

  const {
    data: shops,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['shops'],
    queryFn: fetchRestaurants
  });

  if (isLoading) {
    return <div>Loading...</div>;
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
          <SideBarMenuItem key={shop.id} to={`/detail/${shop.id}`}>
            이름:{shop.name}
            장르:{shop.genre}
            별점:{shop.rating}
            주소:{shop.address}
            위치:{shop.location}
            사진:{shop.img_url} {/* 이미지 URL을 출력하도록 수정 */}
          </SideBarMenuItem>
        ))}
      </SideBarMenu>
    </SideBarContainer>
  );
};

export default SideBar;
