import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

    const initMap = () => {
      const container = document.getElementById('map'); // 지도를 표시할 div
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도 중심 좌표 (서울 중심)
        level: 1 // 지도 확대 레벨
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

      // 음식점 카테고리 검색 함수
      const searchCategoryPlaces = (page = 1) => {
        const options = {
          bounds,
          page
        };
        places.categorySearch('FD6', placesSearchCB, options);
      };

      // 모든 페이지의 결과를 저장하는 배열
      let allPlaces = [];

      // 검색 콜백 함수
      const placesSearchCB = (data, status, pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 새로운 데이터를 기존 데이터에 추가
          allPlaces = [...allPlaces, ...data];

          // 다음 페이지가 있으면 다음 페이지 검색
          if (pagination.hasNextPage) {
            pagination.nextPage(searchCategoryPlaces);
          } else {
            // 모든 페이지를 다 검색한 후에 필터링
            const filteredData = allPlaces.filter(
              (place) => place.place_name.includes(keyword) && place.address_name.includes('서울')
            );
            setPlaces(filteredData);

            const latLingBounds = new window.kakao.maps.LatLngBounds();

            filteredData.forEach((place) => {
              displayMarker(place, latLingBounds);
            });

            // 검색한 모든 마커가 보이게 지도 범위를 설정
            map.setBounds(bounds);
          }
        }
      };

      // 검색된 장소 위치에 마커를 표시하는 함수
      const displayMarker = (place, latLngBounds) => {
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

  // 검색창에 검색어 submit 시 실행되는 이벤트 핸들러
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.elements.keyword.value);
  };

  return (
    <>
      <StDiv id="map">
        <SearchBar onSubmit={handleSearch}>
          <input type="text" name="keyword" placeholder="가게 이름을 검색하세요" />
          <button type="submit">검색</button>
        </SearchBar>
        <PlaceList>
          {places.map((place, index) => (
            <PlaceItem key={index} className="place-item">
              {place.place_name}
            </PlaceItem>
          ))}
        </PlaceList>
      </StDiv>
    </>
  );
};

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  width: fit-content;
  input {
    padding: 10px;
    font-size: 16px;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #45a049;
    }
  }
`;

const StDiv = styled.div`
  position: relative;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
`;

const PlaceList = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
  position: absolute;
  top: 60px;
  left: 10px;
  width: 300px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
`;

const PlaceItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

export default Map;
