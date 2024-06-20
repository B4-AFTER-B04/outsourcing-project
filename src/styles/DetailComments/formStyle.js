import styled from "styled-components";

export const FormWrapper = styled.form`
display: flexbox;
`
export const Commentscontainer = styled.div`
`

export const InputNickname = styled.input`
border-radius: 5px;
margin-right: 10px;
`

export const InputPwd = styled.input`
border-radius: 5px;
margin-right: 10px;
`

export const RatingSelect = styled.select`
font-weight: bold;
`

export const StyledComentBox = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;

export const CommentEnterBtn = styled.button`
background-color: var(--sub-color);

&:hover {
  background: var(--main-color);
}
`