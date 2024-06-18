import React from 'react';
import styled from 'styled-components';

const DetailInfo = () => {
  return (
    <Section>
      <H2>비상식탁(placeName)</H2>
      <Span>제주산 흑돼지(category)</Span>
      <Span>★★★★★ 5점(rating)</Span>
      <Span>📫서울특별시 영등포구 당산로 00 1층(address)</Span>
      <Span>☎️ 0507-1234-5678(phoneNumber)</Span>
    </Section>
  );
};

export default DetailInfo;

const Section = styled.section`
  width: 90%;
  margin: 20px;
`;

const H2 = styled.h2`
  font-size: 40px;
  font-weight: 600;

  margin-bottom: 30px;
`;

const Span = styled.div`
  font-size: 25px;
  font-weight: 500;

  margin: 10px 0;
`;
