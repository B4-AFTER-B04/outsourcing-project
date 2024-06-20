import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addComment, deleteComment, fetchComments, updateComment } from '../../supabase/supabaseCommentsService';
import Comments from './Comments';
import CommentsForm from './CommentsForm';

const DetailComents = ({ shop }) => {
  const queryClient = useQueryClient();

  const { data: comments, isPending } = useQuery({
    queryKey: ['comments', shop.id],
    queryFn: () => fetchComments(shop.id)
  });

  const { mutate: addCommentMutation } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', shop.id] });
    }
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments', shop.id] })
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: updateComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments', shop.id] })
  });

  if (isPending) return null;

  return (
    <StyledCommentsContainer>
      <CommentsForm addCommentMutation={addCommentMutation} shop={shop} />
      {comments.map((comment) => (
        <Comments key={comment.id} {...comment} deleteMutation={deleteMutation} updateMutation={updateMutation} />
      ))}
    </StyledCommentsContainer>
  );
};

const StyledCommentsContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
`;

export default DetailComents;
