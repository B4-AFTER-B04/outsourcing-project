import { useQuery } from '@tanstack/react-query';
<<<<<<< HEAD
import { useIntersection } from 'react-use';
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  SideBarButton,
  SideBarContainer,
  SideBarMenu,
  SideBarMenuItem
} from './SidBarStyledcomponents';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Detail from '../../pages/DetailPage/Detail';
import supabase from '../../supabase/supabaseClient';
import Search from './Search';
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [modalStates, setModalStates] = useState({});
  const [page, setPage] = useState(1);
  const [shops, setShops] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const intersectionRef = useRef(null);
  const [filteredShops, setFilteredShops] = useState([]);


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
    const { data } = await supabase
      .from('restaurants')
      .select('*')
      .range((page - 1) * 10, page * 10 - 1);

    setHasMore(data.length === 10);
    return data;
  };

  const {
    data: fetchedShops,
    isPending,
    isError
  } = useQuery({
    queryKey: ['shops', page],
    queryFn: fetchRestaurants,
    onSuccess: (data) => {
      setShops((prevShops) => [...prevShops, ...data]);
    }
  });

<<<<<<< HEAD
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  useEffect(() => {
    if (intersection?.isIntersecting && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [intersection?.isIntersecting, hasMore]);

  if (isPending) {
    return <div>Loading...</div>;
=======
  useEffect(() => {
    if (shops) {
      setFilteredShops(shops);
    }
  }, [shops]);

  if (isPending) {
    <div>loading..</div>;
    return;
>>>>>>> c3fe4aa70a2aef835c74ff248e46994326a4b84f
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarButton onClick={toggleSidebar}>{isOpen ? '👈' : '👉'}</SideBarButton>
      <Search shops={shops} setFilteredShops={setFilteredShops} />
      <SideBarMenu>
<<<<<<< HEAD
        {fetchedShops.map((shop) => (
          <SideBarMenuItem key={shop.id}>
            이름:{shop.name}
            장르:{shop.genre}
            별점:{shop.rating}
            주소:{shop.address}
            위치:{shop.location}
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
        <div ref={intersectionRef} />
=======
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
>>>>>>> c3fe4aa70a2aef835c74ff248e46994326a4b84f
      </SideBarMenu>
    </SideBarContainer>
  );
};

export default SideBar;
