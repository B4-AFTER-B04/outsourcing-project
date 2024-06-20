import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flexbox;
  border-radius: 5px;
`;
export const Commentscontainer = styled.div`
  border-radius: 5px;
`;

export const InputNickname = styled.input`
  border-radius: 5px;
  margin: 0 10px 0 5px;
`;

export const InputPwd = styled.input`
  border-radius: 5px;
  margin: 0 10px 0 5px;
`;

export const RatingSelect = styled.select`
  font-weight: bold;
  margin: 0 10px 0 5px;
`;

export const StyledComentBox = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  border-radius: 5px;
`;

export const CommentEnterBtn = styled.button`
  background-color: var(--sub-color);

  &:hover {
    background: var(--main-color);
    box-shadow: 0px 15px 20px rgba(27, 39, 63, 0.4);
    color: whitesmoke;
    transform: translateY(-5px);
  }
  border: 1px solid black;
  border-radius: 5px;
`;
