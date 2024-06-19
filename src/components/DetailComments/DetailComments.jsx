import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addComment, deleteComment, fetchComments, updateComment } from '../../supabase/supabaseCommentsService';
import Comments from './Comments';
import CommentsForm from './CommentsForm';

const DetailComents = () => {
  const queryClient = useQueryClient();

  const { data: comments, isPending } = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments
  });

  const { mutate: addCommentMutation } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    }
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments'] })
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: updateComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments'] })
  });

  if (isPending) return null;

  return (
    <StyledCommentsContainer>
      <CommentsForm addCommentMutation={addCommentMutation} />
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
