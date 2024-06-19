import { useState } from 'react';
import styled from 'styled-components';
import { confirmUpdateComment } from '../../supabase/supabaseCommentsService';

const CommentsModal = ({ modalOpen, setModalOpen, id, updateMutation }) => {
  const [updatedInput, setUpdatedInput] = useState({
    password: '',
    content: ''
  });

  const handleChangeInput = (e) => {
    setUpdatedInput({
      ...updatedInput,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (targetId) => {
    const { password, content } = updatedInput;

    if (!password || !content) {
      alert('비밀번호와 내용을 모두 입력해야 합니다.');
      return;
    }

    await confirmUpdateComment(targetId, password, content, updateMutation);
  };

  return (
    <>
      {modalOpen && (
        <StCommentModal>
          <StCommentModalBox>
            <StInputBox>
              <p>
                비밀번호 입력 :{' '}
                <StInput
                  id="password"
                  name="password"
                  type="password"
                  value={updatedInput.password}
                  onChange={handleChangeInput}
                />{' '}
              </p>
              수정할 내용 입력{' '}
              <StyledTextarea
                id="content"
                name="content"
                type="text"
                value={updatedInput.content}
                onChange={handleChangeInput}
              />
            </StInputBox>
            <StButtonBox>
              <StButton onClick={() => handleUpdate(id)}>확인</StButton>
              <StButton onClick={() => setModalOpen(!modalOpen)}>닫기</StButton>
            </StButtonBox>
          </StCommentModalBox>
        </StCommentModal>
      )}
    </>
  );
};

const StCommentModal = styled.div`
  position: fixed;
  width: 400px;
  height: 250px;
  border-radius: 8px;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border: 2px solid black;
`;

const StCommentModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  gap: 25px;
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StButton = styled.button`
  width: 50%;
  border: none;
  outline: none;
`;

const StInputBox = styled.div`
  font-size: 16px;
`;

const StInput = styled.input`
  padding: 6px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;

export default CommentsModal;
