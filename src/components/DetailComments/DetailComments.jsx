import { useAddComment, useDeleteComment, useGetComments, useUpdateComment } from '../../queries/useCommnetsQueries';
import { StyledCommentsContainer } from '../../styles/Detail/DetailComments/DetailCommentsStyle';
import { BlankCommentItems } from '../../styles/Detail/DetailComments/commentsStyle';
import Comments from './Comments';
import CommentsForm from './CommentsForm';
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
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <Comments key={comment.id} {...comment} deleteMutation={deleteMutation} updateMutation={updateMutation} />
        ))
      ) : (
        <BlankCommentItems>아직 작성된 리뷰가 없습니다</BlankCommentItems>
      )}
    </StyledCommentsContainer>
  );
};

export default DetailComents;
