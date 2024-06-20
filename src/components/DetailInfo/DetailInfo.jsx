import React from 'react';
import {
  DetailInfoWrapper,
  InfoItem,
  InfoStarContainer,
  InfoName,
  Star,
  InfoContainer
} from '../../styles/Detail/DetailInfo/detailInfoStyle';

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
    <DetailInfoWrapper>
      <InfoContainer>
        <InfoName>{shop.name}</InfoName>
        <InfoItem>{shop.genre}</InfoItem>
        <InfoStarContainer>
          {renderStars(shop.rating)} {shop.rating}점
        </InfoStarContainer>
        {shop.phoneNumber ? <InfoItem>{shop.address}</InfoItem> : ''}
      </InfoContainer>
    </DetailInfoWrapper>
  );
};

export default DetailInfo;
