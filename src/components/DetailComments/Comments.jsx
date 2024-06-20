import styled from 'styled-components';
import CommentsUpdateModal from './CommentsUpdateModal';
import { useState } from 'react';
import CommentsDeleteModal from './CommentsDeleteModal';

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
    <div>
      <div>
        <p>닉네임 : {nickname}</p>
        <p>평점 : {renderStars(rating)}</p>
        <p>내용 : {content}</p>
      </div>
      <div></div>
      <button onClick={() => setUpdateModalOpen(!updateModalOpen)}>수정</button>
      <button onClick={() => setDeleteModalOpen(!deleteModalOpen)}>삭제</button>
      <hr />
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
    </div>
  );
};

const Star = styled.span`
  color: #ffcc00;
  font-size: 20px;
  margin-right: 2px;
`;

export default Comments;
