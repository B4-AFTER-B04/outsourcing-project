import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addComment, deleteComment, fetchComments, updateComment } from '../supabase/supabaseCommentsService';
import { QUERY_KEY } from './constantsQueryKey';

export const useGetComments = (shopId) => {
	
  return useQuery({
    queryKey: QUERY_KEY.COMMENT(shopId),
    queryFn: () => fetchComments(shopId)
  });
};

export const useAddComment = (shopId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', shopId] });
      alert('작성이 완료되었습니다.');
    }
  });
};

export const useDeleteComment = (shopId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments', shopId] })
  });
};

export const useUpdateComment = (shopId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments', shopId] })
  });
};
