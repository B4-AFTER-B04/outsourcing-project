import React from 'react';
import styled from 'styled-components';

const DetailMap = () => {
  const dummy = `https://velog.velcdn.com/images/kgh9393/post/eb94da4a-609c-4fc4-9cbb-3a5a08dd88f3/image.png`;
  return (
    <Section>
      <Img src={dummy} />
    </Section>
  );
};

export default DetailMap;

const Section = styled.section`
  width: 90%;
  margin: 20px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
