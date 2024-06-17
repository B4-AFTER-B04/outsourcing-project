import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

const DetailCarousel = () => {
  return (
    <>
      <StSwiper>
        <SwiperSlide modules={[Pagination]}>
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
        </SwiperSlide>
      </StSwiper>
    </>
  );
};

export default DetailCarousel;

const StSwiper = styled(Swiper)`
  border: 2px solid black;
  border-radius: 20px;
  padding: 20px 0;
  width: 80%;
  min-width: 400px;
  max-width: 1300px;
`;
