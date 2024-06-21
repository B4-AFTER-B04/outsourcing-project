import styled from 'styled-components';

export const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--lightgray-color2);
  border-radius: 5px;
  margin: 10px 20px 10px 20px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
`;

export const CommentItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`;

export const NickItem = styled.ul`
  font-size: 15px;
  margin-left: 5px;
`;
export const RatingItem = styled.ul`
  font-size: 15px;
  margin-left: 5px;
`;

export const ContentItem = styled.ul`
  font-size: 15px;
  margin-left: 5px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 14px;
  /* margin-left: 480px; */
  /* right: 0px;
  align-items: flex-end; */
`;

export const Star = styled.span`
  /* color: #ffcc00; */
  color: var(--main-color);
  font-size: 18px;
  margin-right: 2px;
`;

export const BlankCommentItems = styled.div`
  text-align: center;
`;
