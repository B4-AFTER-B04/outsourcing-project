import { useState } from 'react';
import { confirmUpdateComment } from '../../supabase/supabaseCommentsService';
import {
  ModalBoxContainer,
  ModalInputs,
  FixInputcontent,
  ModalBtnContainer,
  ModalBoxWrapper,
  ChangeInputPassword
} from '../../styles/Detail/DetailComments/commentsModalStyle';
import { ModalButton } from '../../styles/common/btnStyle';
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
    setUpdatedInput({
      ...updatedInput,
      password: '',
      content: ''
    });
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen && (
        <ModalBoxWrapper>
          <ModalBoxContainer>
            <ModalInputs>
              <p>수정할 내용 입력</p>
              <FixInputcontent
                id="content"
                name="content"
                type="text"
                value={updatedInput.content}
                onChange={handleChangeInput}
              />
              <p>
                <ChangeInputPassword
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={updatedInput.password}
                  onChange={handleChangeInput}
                />{' '}
              </p>
            </ModalInputs>
            <ModalBtnContainer>
              <ModalButton onClick={() => handleUpdate(id)}>확인</ModalButton>
              <ModalButton onClick={() => setModalOpen(!modalOpen)}>닫기</ModalButton>
            </ModalBtnContainer>
          </ModalBoxContainer>
        </ModalBoxWrapper>
      )}
    </>
  );
};

export default CommentsModal;
