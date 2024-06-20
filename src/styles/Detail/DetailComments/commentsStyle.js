import styled from 'styled-components';

export const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--darkgray-color);
  border-radius: 5px;
`;

export const CommentItems = styled.ul`
  display: block;
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
  text-align: center;
  margin-left: 480px;
`;

export const Star = styled.span`
  color: #ffcc00;
  font-size: 20px;
  margin-right: 2px;
`;
