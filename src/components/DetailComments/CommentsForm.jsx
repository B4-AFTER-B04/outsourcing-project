import { useState } from 'react';
import {
  FormWrapper,
  Commentscontainer,
  InputNickname,
  InputPwd,
  StyledComentBox,
  StyledTextarea,
  RatingSelect
} from '../../styles/Detail/DetailComments/formStyle';
import { CommentEnterBtn } from '../../styles/common/btnStyle';

const CommentsForm = ({ addMutation, shop }) => {
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
      content: userComment.content,
      shopId: shop.id
    };

    await addMutation(newComment);

    setUserComment({
      ...userComment,
      nickname: '',
      password: '',
      rating: '',
      content: ''
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Commentscontainer>
        <label htmlFor="nickname">닉네임</label>
        <InputNickname
          id="nickname"
          type="text"
          name="nickname"
          value={userComment.nickname}
          onChange={handleChangeInput}
          placeholder="닉네임을 입력하세요"
        />
        <label htmlFor="password">비밀번호</label>
        <InputPwd
          id="password"
          type="password"
          name="password"
          value={userComment.password}
          onChange={handleChangeInput}
          placeholder="비밀번호를 입력하세요"
        />
        <label htmlFor="rating"> 평점</label>
        <RatingSelect id="rating" name="rating" value={userComment.rating} onChange={handleChangeInput}>
          <option value="">평점 선택</option>
          <option value="1">★☆☆☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="3">★★★☆☆</option>
          <option value="4">★★★★☆</option>
          <option value="5">★★★★★</option>
        </RatingSelect>
      </Commentscontainer>

      <br />
      <StyledComentBox>
        <StyledTextarea id="content" name="content" value={userComment.content} onChange={handleChangeInput} />
        <CommentEnterBtn type="button" onClick={handleSubmit}>
          등록
        </CommentEnterBtn>
      </StyledComentBox>
      <hr style={{ width: '95%' }} />
    </FormWrapper>
  );
};

export default CommentsForm;
