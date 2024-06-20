import { useQuery } from '@tanstack/react-query';
import supabase from '../supabase/supabaseClient';

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
    return null;
  }
};

export const useGetAverageRating = (shopId) => {
  return useQuery({
    queryKey: ['averageRating', shopId],
    queryFn: () => fetchAverageRating(shopId)
  });
};
