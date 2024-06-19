import styled from 'styled-components';
import { confirmDeleteComment, confirmUpdateComment } from '../../supabase/supabaseCommentsService';
import CommentsModal from './CommentsModal';
import { useState } from 'react';

const Comments = ({ id, nickname, content, rating, deleteMutation, updateMutation }) => {
  const [modal, setModal] = useState(false);

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

  const handleUpdate = async (targetId) => {
    // setModal(!modal);
    const password = prompt('비밀번호를 입력하세요 :');
    const content = prompt('수정할 내용을 입력해주세요 :');

    if (!password || !content) {
      alert('비밀번호와 내용을 모두 입력해야 합니다.');
      return;
    }

    await confirmUpdateComment(targetId, password, content, updateMutation);
  };

  const handleDelete = async (targetId) => {
    const password = prompt('비밀번호를 입력하세요:');

    if (!password) {
      alert('비밀번호를 입력해야 합니다.');
      return;
    }

    await confirmDeleteComment(targetId, password, deleteMutation);
  };

  return (
    <div>
      <p>닉네임 : {nickname}</p>
      <p>평점 : {renderStars(rating)}</p>
      <p>내용 : {content}</p>
      <button onClick={() => handleUpdate(id)}>수정</button>
      <button onClick={() => handleDelete(id)}>삭제</button>
      <hr />
      {/* <CommentsModal /> */}
      {/* {modal && <CommentsModal setModal={setModal} />} */}
    </div>
  );
};

const Star = styled.span`
  color: #ffcc00;
  font-size: 20px;
  margin-right: 2px;
`;

export default Comments;
