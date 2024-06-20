import CommentsUpdateModal from './CommentsUpdateModal';
import { useState } from 'react';
import CommentsDeleteModal from './CommentsDeleteModal';
import {
  CommentsWrapper,
  CommentItems,
  NickItem,
  RatingItem,
  ContentItem,
  CommentBtnContainer,
  Star
} from '../../styles/Detail/DetailComments/commentsStyle';

const Comments = ({ id, nickname, content, rating, deleteMutation, updateMutation }) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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

  return (
    <CommentsWrapper>
      <CommentItems>
        <NickItem>닉네임 : {nickname}</NickItem>
        <RatingItem>평점 : {renderStars(rating)}</RatingItem>
        <ContentItem>내용 : {content}</ContentItem>
      </CommentItems>
      <CommentBtnContainer></CommentBtnContainer>
      <button onClick={() => setUpdateModalOpen(!updateModalOpen)}>수정</button>
      <button onClick={() => setDeleteModalOpen(!deleteModalOpen)}>삭제</button>
      <CommentsUpdateModal
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        id={id}
        updateMutation={updateMutation}
      />
      <CommentsDeleteModal
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
        id={id}
        deleteMutation={deleteMutation}
      />
    </CommentsWrapper>
  );
};


export default Comments;
