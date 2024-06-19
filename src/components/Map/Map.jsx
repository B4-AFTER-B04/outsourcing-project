import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBar from '../SideBar';

const kakaoMapApiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const Map = () => {
  const [places, setPlaces] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load script'));
        document.head.appendChild(script);
      });
    };

    // supabase에서 restaurants data fetch 함수
    const fetchRestaurants = async () => {
      const { data, error } = await supabase.from('restaurants').select('*');

      if (error) {
        console.error('Error fetching data:', error);
        return [];
      }

      return data;
    };

    const initMap = async () => {
      const container = document.getElementById('map'); // 지도를 표시할 div
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도 중심 좌표 (서울 중심)
        level: 1 // 지도 확대 레벨
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(container, options);

      // 검색 결과 목록 or 마커 클릭 시 나타나는 infowindow
      const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });

      // Supabase Data
      const supabaseData = await fetchRestaurants();
      setPlaces(supabaseData);

      // 검색된 장소 위치에 마커를 표시하는 함수
      const displayMarker = (place, latLngBounds) => {
        console.log(place);
        const marker = new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(place.y, place.x)
        });

        // 마커 위치를 latLngBounds에 추가
        latLngBounds.extend(new window.kakao.maps.LatLng(place.y, place.x));

        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
        });
        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close();
        });

        // PlaceItem hover 시 마커와 InfoWindow 설정
        const $placeItems = document.querySelectorAll('.place-item');
        $placeItems.forEach(($item) => {
          $item.addEventListener('mouseenter', () => {
            marker.setMap(map); // 마커 지도에 추가
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker); // 클릭한 마커의 위치에 인포윈도우 열기
          });
          $item.addEventListener('mouseleave', () => {
            marker.setMap(null); // 마커 지도에서 제거
          });
        });
      };

      searchCategoryPlaces();
    };

    const scriptUrl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapApiKey}&libraries=services&autoload=false`;

    loadScript(scriptUrl)
      .then(() => {
        window.kakao.maps.load(() => {
          initMap();
        });
      })
      .catch((err) => {
        console.error('Error loading Kakao maps script:', err.message);
      });
  }, [keyword]);

  return (
    <>
      <StDiv id="map">
        <SideBar />
      </StDiv>
    </>
  );
};

const StDiv = styled.div`
  position: relative;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
`;

export default Map;
