import React, { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  DetailInfoWrapper,
  InfoItem,
  InfoStarContainer,
  InfoName,
  Star,
  InfoContainer
} from '../../styles/Detail/DetailInfo/detailInfoStyle';
import supabase from '../../supabase/supabaseClient';

const fetchAverageRating = async (shopId) => {
  const { data, error } = await supabase.from('comments').select('rating').eq('shopId', shopId);

  if (error) {
    throw new Error(error.message);
  }

  if (data && data.length > 0) {
    const totalRating = data.reduce((acc, comment) => acc + comment.rating, 0);
    const avgRating = totalRating / data.length;
    return avgRating;
  } else {
    return null; // 리뷰가 없을 때 null로 설정
  }
};

const updateComment = async ({ shopId, commentId, rating }) => {
  const { data, error } = await supabase.from('comments').update({ rating }).eq('id', commentId).eq('shopId', shopId);

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
};

export const useUpdateComment = (shopId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['averageRating', shopId] })
  });
};

const DetailInfo = ({ shop }) => {
  const {
    data: rating,
    error,
    isLoading
  } = useQuery({
    queryKey: ['averageRating', shop.id],
    queryFn: () => fetchAverageRating(shop.id)
  });

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
