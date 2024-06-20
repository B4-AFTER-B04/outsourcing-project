import React from 'react';
import { useGetAverageRating } from '../../hooks/useGetAverageRating';
import {
  DetailInfoWrapper,
  InfoItem,
  InfoStarContainer,
  InfoName,
  Star,
  InfoContainer
} from '../../styles/Detail/DetailInfo/detailInfoStyle';

const DetailInfo = ({ shop }) => {
  const { data: rating, error, isLoading } = useGetAverageRating(shop.id);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DetailInfoWrapper>
      <InfoContainer>
        <InfoName>{shop.name}</InfoName>
        <InfoItem>{shop.genre}</InfoItem>
        {rating !== null ? (
          <InfoStarContainer>
            {renderStars(rating)} {`${rating.toFixed(1)}점`}
          </InfoStarContainer>
        ) : (
          <InfoStarContainer>{renderStars(0)} 리뷰가 없습니다</InfoStarContainer>
        )}
        {shop.phoneNumber && <InfoItem>{shop.address}</InfoItem>}
      </InfoContainer>
    </DetailInfoWrapper>
  );
};

export default DetailInfo;
