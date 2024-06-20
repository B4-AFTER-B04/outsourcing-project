import { useEffect, useRef } from 'react';
import { MapContainer } from '../../styles/Map/mapStyle';

const kakaoMapApiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const Map = ({ filteredShops, selectedShop }) => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // 마커 제거
  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  };

  // 마커 추가
  const addMarker = (map, x, y, name) => {
    const marker = new window.kakao.maps.Marker({
      map,
      position: new window.kakao.maps.LatLng(y, x)
    });
    markersRef.current.push(marker);

    // 검색 결과 목록 or 마커 클릭 시 나타나는 infowindow
    const infowindow = new window.kakao.maps.InfoWindow({
      content: `<div style="padding:5px;font-size:12px;">${name}</div>`
    });

    window.kakao.maps.event.addListener(marker, 'mouseover', () => {
      infowindow.open(map, marker);
    });

    window.kakao.maps.event.addListener(marker, 'mouseout', () => {
      infowindow.close();
    });

    return marker;
  };

  // mount: 전체 마커 표시
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

    const initMap = async () => {
      const container = document.getElementById('map'); // 지도를 표시할 div
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도 중심 좌표 (서울 중심)
        level: 3 // 지도 확대 레벨
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(container, options);
      mapRef.current = map;

      const bounds = new window.kakao.maps.LatLngBounds();

      if (filteredShops.length > 0) {
        filteredShops.forEach((place) => {
          const marker = addMarker(map, place.x, place.y, place.name);
          bounds.extend(marker.getPosition());
        });

        // 모든 마커가 보이도록 지도 범위를 설정
        map.setBounds(bounds);
      } else if (selectedShop) {
        const marker = addMarker(map, selectedShop.location, selectedShop.name);
        bounds.extend(marker.getPosition());
        map.setCenter(marker.getPosition());
      } else {
      }
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
  }, [filteredShops]);

  // update: 선택한 place 마커 표시
  useEffect(() => {
    if (!mapRef.current) return;

    clearMarkers();

    const bounds = new window.kakao.maps.LatLngBounds();

    if (selectedShop) {
      const marker = addMarker(mapRef.current, selectedShop.x, selectedShop.y, selectedShop.name);
      bounds.extend(marker.getPosition());
      mapRef.current.setCenter(marker.getPosition());
    } else {
      filteredShops.forEach((place) => {
        const marker = addMarker(mapRef.current, place.location, place.name);
        bounds.extend(marker.getPosition());
      });
      mapRef.current.setBounds(bounds);
    }
  }, [filteredShops, selectedShop]);

  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
};

export default Map;
