import { useState } from 'react';
import { StButton, StButtonBox, StCommentModal, StCommentModalBox, StInput, StInputBox } from './CommentsUpdateModal';
import { confirmDeleteComment } from '../../supabase/supabaseCommentsService';

const CommentsDeleteModal = ({ modalOpen, setModalOpen, id, deleteMutation }) => {
  const [deleteInput, setDeleteInput] = useState('');

  const handleDelete = async (targetId) => {
    if (!deleteInput) {
      alert('비밀번호를 입력해야 합니다.');
      return;
    }

    await confirmDeleteComment(targetId, deleteInput, deleteMutation);
    setDeleteInput('');
  };

  return (
    <>
      {modalOpen && (
        <StCommentModal>
          <StCommentModalBox>
            <StInputBox>
              <p>
                <StInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={deleteInput}
                  onChange={(e) => setDeleteInput(e.target.value)}
                />{' '}
              </p>
            </StInputBox>
            <StButtonBox>
              <StButton onClick={() => handleDelete(id)}>확인</StButton>
              <StButton onClick={() => setModalOpen(!modalOpen)}>닫기</StButton>
            </StButtonBox>
          </StCommentModalBox>
        </StCommentModal>
      )}
    </>
  );
};

export default CommentsDeleteModal;
