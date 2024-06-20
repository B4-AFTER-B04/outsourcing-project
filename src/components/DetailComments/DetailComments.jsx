import styled from 'styled-components';
import Comments from './Comments';
import CommentsForm from './CommentsForm';
import { useAddComment, useDeleteComment, useGetComments, useUpdateComment } from '../../queries/useCommnetsQueries';

const DetailComents = ({ shop }) => {
  const shopId = shop.id;

  const { data: comments, isPending } = useGetComments(shopId);
  const { mutate: addMutation } = useAddComment(shopId);
  const { mutate: deleteMutation } = useDeleteComment(shopId);
  const { mutate: updateMutation } = useUpdateComment(shopId);

  if (isPending) return null;

  return (
    <StyledCommentsContainer>
      <CommentsForm addMutation={addMutation} shop={shop} />
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
