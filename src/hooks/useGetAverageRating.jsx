import { useCallback, useEffect, useState } from 'react';
import supabase from '../supabase/supabaseClient';

const useGetAverageRating = () => {
  const [ratings, setRatings] = useState([]);
  const [error, setError] = useState(null);

  const fetchAverageRating = useCallback(async () => {
    const { data, error } = await supabase
      .from('comments')
      .select(`restaurants(${shop.id}), avg(rating)`)
      .group(`restaurants.${shop.id}`);

    if (error) {
      setError(error.message);
      return;
    }

    setRatings(data);
  }, []);

  useEffect(() => {
    fetchAverageRating();
  }, [fetchAverageRating]);

  return { ratings, error };
};

export default useGetAverageRating;
