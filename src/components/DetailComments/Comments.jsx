import styled from 'styled-components';
import { confirmDeleteComment } from '../../supabase/supabaseCommentsService';
import CommentsModal from './CommentsModal';
import { useState } from 'react';

const Comments = ({ id, nickname, content, rating, deleteMutation, updateMutation }) => {
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleDelete = async (targetId) => {
    const password = window.prompt('비밀번호를 입력하세요:');

    if (!password) {
      alert('비밀번호를 입력해야 합니다.');
      return;
    }

    await confirmDeleteComment(targetId, password, deleteMutation);
  };

  return (
    <div>
      <div>
        <p>닉네임 : {nickname}</p>
        <p>평점 : {renderStars(rating)}</p>
        <p>내용 : {content}</p>
      </div>
      <div></div>
      <button onClick={() => setModalOpen(!modalOpen)}>수정</button>
      <button onClick={() => handleDelete(id)}>삭제</button>
      <hr />
      <CommentsModal modalOpen={modalOpen} setModalOpen={setModalOpen} id={id} updateMutation={updateMutation} />
    </div>
  );
};

const Star = styled.span`
  color: #ffcc00;
  font-size: 20px;
  margin-right: 2px;
`;

export default Comments;
