import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const CarouselSection = styled.section`
  width: 90%;
  min-width: 400px;
  max-width: 1300px;
  margin: 5px;
`;

export const SwiperWrapper = styled(Swiper)`
  display: flex;
`;

export const ImgContainer = styled.div`
width: 200px;
border-radius: 10px;
`

export const CarouselImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding: 15px;
  border-radius: 5px;
  object-fit: cover;
 
`;

