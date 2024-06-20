import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {
  CarouselSection,
  SwiperWrapper,
  CarouselImg,
  ImgContainer,
  Img
} from '../../styles/Detail/DetailCarousel/carouselStyle';

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
    <CarouselSection>
      <SwiperWrapper
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
            <SwiperSlide key={index}>
              <ImgContainer>
                <CarouselImg src={item.url} alt={`image-${index}`} />
              </ImgContainer>
            </SwiperSlide>
          ))
        ) : (
          <StSwiperSlide>
            <Img src={imgData} />
          </StSwiperSlide>
        )}
      </SwiperWrapper>
    </CarouselSection>
  );
};

export default DetailCarousel;
