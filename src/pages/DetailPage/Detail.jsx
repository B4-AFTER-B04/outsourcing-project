import React from 'react';
import DetailCarousel from '../../components/DetailCarousel';
import DetailInfo from '../../components/DetailInfo';
import DetailMap from '../../components/DetailMap';
import DetailComments from '../../components/DetailComments';
import { DetailContainer } from '../../styles/DetailPage/detailPageStyle';


const Detail = ({ shop }) => {
  return (
    <DetailContainer>
      <DetailCarousel shop={shop} />
      <DetailInfo shop={shop} />
      <DetailMap shop={shop} />
      <DetailComments />
    </DetailContainer>
  );
};

export default Detail;


