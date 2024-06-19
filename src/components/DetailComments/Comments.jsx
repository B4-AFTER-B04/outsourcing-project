import { confirmDeleteComment, confirmUpdateComment } from '../../supabase/supabaseCommentsService';

const Comments = ({ id, nickname, content, rating, deleteMutation, updateMutation }) => {
  const handleUpdate = async (targetId) => {
    const nickname = prompt('닉네임을 입력하세요 :');
    const password = prompt('비밀번호를 입력하세요 :');
    const content = prompt('수정할 내용을 입력해주세요 :');

    if (!nickname || !password) {
      alert('닉네임과 비밀번호를 모두 입력해야 합니다.');
      return;
    }

    await confirmUpdateComment(targetId, nickname, password, content, updateMutation);
  };

  const handleDelete = async (targetId) => {
    const nickname = prompt('닉네임을 입력하세요:');
    const password = prompt('비밀번호를 입력하세요:');

    if (!nickname || !password) {
      alert('닉네임과 비밀번호를 모두 입력해야 합니다.');
      return;
    }

    await confirmDeleteComment(targetId, nickname, password, deleteMutation);
  };

  return (
    <div>
      <p>닉네임 : {nickname}</p>
      <p>내용 : {content}</p>
      <p>평점 : {rating}</p>
      <button onClick={() => handleUpdate(id)}>수정</button>
      <button onClick={() => handleDelete(id)}>삭제</button>
      <hr />
    </div>
  );
};

export default Comments;
