import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import {
  CarouselImg,
  CarouselSection,
  ImgWrapper,
  SwiperWrapper
} from '../../styles/Detail/DetailCarousel/carouselStyle';

const DetailCarousel = ({ shop, $inModal }) => {
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
            <SwiperSlide key={`${index}-${item.url}`}>
              <ImgWrapper $inModal={$inModal}>
                <CarouselImg src={item.url} alt={`image-${index}`} />
              </ImgWrapper>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <ImgWrapper $inModal={$inModal}>
              <CarouselImg src={imgData} />
            </ImgWrapper>
          </SwiperSlide>
        )}
      </SwiperWrapper>
    </CarouselSection>
  );
};

export default DetailCarousel;
