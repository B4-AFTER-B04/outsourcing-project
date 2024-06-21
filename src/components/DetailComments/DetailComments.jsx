import Comments from './Comments';
import CommentsForm from './CommentsForm';
import { useAddComment, useDeleteComment, useGetComments, useUpdateComment } from '../../queries/useCommnetsQueries';
import { StyledCommentsContainer } from '../../styles/Detail/DetailComments/DetailCommentsStyle';
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

export default DetailComents;
