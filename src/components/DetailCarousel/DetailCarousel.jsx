import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const DetailCarousel = () => {
  const dummy = `https://velog.velcdn.com/images/kgh9393/post/7f78fd8d-95e8-40f7-be28-271cd172f7e5/image.jpeg`;

  return (
    <Section>
      {/* {imgUrl ? <Img src={imgUrl}/> : <Img src={defaultImgUrl} />} */}
      <StSwiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Img src={dummy} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={dummy} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={dummy} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={dummy} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={dummy} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={dummy} />
        </SwiperSlide>
      </StSwiper>
    </Section>
  );
};

export default DetailCarousel;

const Section = styled.section`
  width: 90%;
  min-width: 400px;
  max-width: 1300px;
  margin: 20px;
`;

const StSwiper = styled(Swiper)`
  padding: 10px 0;

  display: flex;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: scale-down;

  padding: 20px;
  border-radius: 5px;
`;
