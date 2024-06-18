import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  addComment,
  confirmDeleteComment,
  confirmUpdateComment,
  deleteComment,
  fetchComments,
  updateComment
} from '../../supabase/supabaseCommentsService';

const DetailComents = () => {
  const [userComment, setUserComment] = useState({
    nickname: '',
    password: '',
    content: '',
    rating: ''
  });

  const handleChangeInput = (e) => {
    setUserComment({
      ...userComment,
      [e.target.name]: e.target.value
    });
  };

  const queryClient = useQueryClient();

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments
  });

  const addCommentMutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    }
  });

  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments'] })
  });

  const updateCommentMutation = useMutation({
    mutationFn: updateComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments'] })
  });

  const handleUpdate = async (id) => {
    const nickname = prompt('닉네임을 입력하세요 :');
    const password = prompt('비밀번호를 입력하세요 :');
    const content = prompt('수정할 내용을 입력해주세요 :');
    console.log(content);

    if (!nickname || !password) {
      alert('닉네임과 비밀번호를 모두 입력해야 합니다.');
      return;
    }
    confirmUpdateComment(id, nickname, password, content, updateCommentMutation);

    // await updateCommentMutation.mutate({ id, content });
  };

  const handleDelete = async (id) => {
    const nickname = prompt('닉네임을 입력하세요:');
    const password = prompt('비밀번호를 입력하세요:');

    if (!nickname || !password) {
      alert('닉네임과 비밀번호를 모두 입력해야 합니다.');
      return;
    }

    confirmDeleteComment(id, nickname, password, deleteCommentMutation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nickname, password, rating, content } = userComment;

    if (nickname === '') {
      return alert('닉네임을 입력해주세요!');
    }
    if (password === '') {
      return alert('패스워드를 입력해주세요!');
    }
    if (rating === '') {
      return alert('평점을 남겨주세요!');
    }
    if (content === '') {
      return alert('댓글을 입력해주세요!');
    }
    const newComment = {
      nickname: userComment.nickname,
      password: userComment.password,
      rating: userComment.rating,
      content: userComment.content
    };

    await addCommentMutation.mutate(newComment);

    setUserComment({
      ...userComment,
      nickname: '',
      password: '',
      rating: '',
      content: ''
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledCommentsContainer>
      {/* 컴포넌트로 따로 빼기 */}
      <h2>댓글</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname">닉네임 : </label>
          <input id="nickname" type="text" name="nickname" value={userComment.nickname} onChange={handleChangeInput} />
          <label htmlFor="password">비밀번호 : </label>
          <input
            id="password"
            type="password"
            name="password"
            value={userComment.password}
            onChange={handleChangeInput}
          />
          <label htmlFor="rating">평점 : </label>
          <select id="rating" name="rating" value={userComment.rating} onChange={handleChangeInput}>
            <option value="">평점 선택</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        <StyledComentBox>
          <StyledTextarea id="content" name="content" value={userComment.content} onChange={handleChangeInput} />
          <button type="submit">등록</button>
        </StyledComentBox>
        <hr />
      </form>
      {/* 컴포넌트로 따로 빼기 */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>닉네임 : {comment.nickname}</p>
            <p>내용 : {comment.content}</p>
            <p>별점 : {comment.rating}</p>
            <button onClick={() => handleUpdate(comment.id)}>수정</button>
            <button onClick={() => handleDelete(comment.id)}>삭제</button>
            <hr />
          </div>
        ))}
      </div>
    </StyledCommentsContainer>
  );
};

const StyledCommentsContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
`;

const StyledComentBox = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;

export default DetailComents;
