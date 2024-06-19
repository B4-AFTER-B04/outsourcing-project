import React from 'react';
import DetailCarousel from '../../components/DetailCarousel';
import DetailInfo from '../../components/DetailInfo';
import DetailMap from '../../components/DetailMap';
import styled from 'styled-components';
import DetailComments from '../../components/DetailComments';

const Detail = () => {
  return (
    <Container>
      <DetailCarousel />
      <DetailInfo />
      <DetailMap />
      <DetailComments />
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
