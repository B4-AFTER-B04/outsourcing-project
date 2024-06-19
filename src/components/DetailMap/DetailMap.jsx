import React, { useEffect } from 'react';
import styled from 'styled-components';

const kakaoMapApiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const DetailMap = ({ shop }) => {
  const x = shop.x;
  const y = shop.y;
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapApiKey}&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(y, x),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(y, x);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);

        // 인포윈도우에 표시할 내용
        const iwContent = `
          <div style="text-align: center; padding: 5px; font-weight: bold; color: #333;">
            ${shop.name}
          </div>
        `;
        const iwPosition = new window.kakao.maps.LatLng(y, x);

        // 인포윈도우를 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent
        });

        // 또는 마커에 마우스오버 이벤트를 등록하여 인포윈도우를 표시
        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.open(map, marker);
        });

        // 마커에 마우스아웃 이벤트를 등록하여 인포윈도우를 닫기
        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close();
        });
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Section>
      <Map id="map" />
    </Section>
  );
};

export default DetailMap;

const Section = styled.section`
  width: 90%;
  margin: 20px;
`;

const Map = styled.div`
  width: 100%;
  height: 400px;
`;
