import React from 'react';
import DetailCarousel from '../../components/DetailCarousel';
import DetailInfo from '../../components/DetailInfo';
import DetailMap from '../../components/DetailMap';
import styled from 'styled-components';
import DetailComments from '../../components/DetailComments';

const Detail = ({ shop }) => {
  return (
    <Container>
      <DetailCarousel shop={shop} />
      <DetailInfo shop={shop} />
      <DetailMap shop={shop} />
      <DetailComments shop={shop} />
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
