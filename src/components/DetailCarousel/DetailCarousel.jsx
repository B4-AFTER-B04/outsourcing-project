import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const DetailCarousel = ({ shop }) => {
  if (!shop.img) {
    return null;
  }

  let imgData;

  try {
    imgData = JSON.parse(shop.img);
  } catch (e) {
    imgData = shop.img;
  }

  return (
    <Section>
      <StSwiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Array.isArray(imgData) ? (
          imgData.map((item, index) => (
            <StSwiperSlide key={item.url}>
              <Img src={item.url} alt={`image-${index}`} />
            </StSwiperSlide>
          ))
        ) : (
          <StSwiperSlide>
            <Img src={imgData} />
          </StSwiperSlide>
        )}
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
  padding-bottom: 20px;
`;

const StSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px; /* 원하는 높이로 조정 */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 5px;
`;
