import React from 'react';
import styled from 'styled-components';

const DetailInfo = ({ shop }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i}>★</Star>);
      } else {
        stars.push(<Star key={i}>☆</Star>);
      }
    }
    return stars;
  };

  return (
    <Section>
      <H2>{shop.name}</H2>
      <Span>{shop.genre}</Span>
      <Span>
        {renderStars(shop.rating)} {shop.rating}점
      </Span>
      <Span>📫 {shop.address}</Span>
      <Span>☎️{shop.phoneNumber}</Span>
    </Section>
  );
};

export default DetailInfo;

const Section = styled.section`
  width: 90%;
  margin: 20px;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Span = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
`;

const Star = styled.span`
  color: #ffcc00;
  font-size: 20px;
  margin-right: 2px;
`;
