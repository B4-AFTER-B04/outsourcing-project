import React from 'react';
import DetailCarousel from '../../components/DetailCarousel';
import DetailInfo from '../../components/DetailInfo';
import DetailMap from '../../components/DetailMap';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <DetailCarousel />
      <DetailInfo />
      <DetailMap />
      {/* <DetailReview */}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
