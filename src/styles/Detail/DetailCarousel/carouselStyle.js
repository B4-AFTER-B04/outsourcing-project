import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const CarouselSection = styled.section`
  width: 90%;
  max-width: 1300px;
  margin: 10px 0;
`;

export const SwiperWrapper = styled(Swiper)`
  padding: 10px 0 30px 0;

  .swiper-pagination-bullet {
    background-color: var(--main-color);

    &.swiper-pagination-bullet-active {
      background-color: var(--main-color);
    }
  }

  .swiper-pagination-bullet-active {
    /* transform: scale(1.2); */
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $inModal }) => ($inModal ? '250px' : '100px')}; /* 원하는 높이로 조정 */
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
