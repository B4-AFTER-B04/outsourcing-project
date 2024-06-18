import { useEffect } from 'react';
import styled from 'styled-components';

const kakaoMapApiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const Map = () => {
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

    const initMap = () => {
      const container = document.getElementById('map'); // 지도를 표시할 div
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도 중심 좌표
        level: 3 // 지도 확대 레벨
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(container, options);

      // 장소 검색 객체 생성
      const places = new window.kakao.maps.services.Places();

      // 검색 결과 목록 or 마커 클릭 시 나타나는 infowindow
      const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });

      // 검색 범위 서울로 설정
      const bounds = new window.kakao.maps.LatLngBounds(
        new window.kakao.maps.LatLng(37.42829747239447, 126.76620437505143), // 서울 남서쪽
        new window.kakao.maps.LatLng(37.7019022270013, 127.1837948332368) // 서울 북동쪽
      );

      // 키워드 검색 함수
      const searchPlaces = () => {
        const boundsOptions = { bounds };
        places.keywordSearch('카페', placesSearchCB, boundsOptions);
      };

      // 키워드 검색 콜백 함수
      const placesSearchCB = (data, status, pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const latLingBounds = new window.kakao.maps.LatLngBounds();
          console.log(data.length);
          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i], latLingBounds);
          }

          // 검색한 모든 마커가 보이도록 지도 범위를 설정
          map.setBounds(latLingBounds);
        }
      };

      // 검색된 장소 위치에 마커를 표시하는 함수
      const displayMarker = (place, latLngBounds) => {
        console.log(place);
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x)
        });

        // 마커 위치를 latLnㅎBounds에 추가
        latLngBounds.extend(new window.kakao.maps.LatLng(place.y, place.x));

        window.kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
        });
      };

      searchPlaces();
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
  }, []);

  return <StDiv id="map"></StDiv>;
};

const StDiv = styled.div`
  width: calc(100vw - 160px);
  height: calc(100vh - 160px);
`;

export default Map;
