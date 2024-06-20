import styled from 'styled-components';

// 사이드 바 여닫기 버튼
export const SideBarButton = styled.button`
  position: absolute;
  top: 20px;
  right: -70px;
  width: 40px;
  height: 40px;
  background-color: var(--main-color);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--sub-color);
    transform: rotateY(180deg);
  }
`;
// 상세 페이지 닫기 버튼
export const SearchCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
// 상세보기 버튼
export const SideBarDetailBtn = styled.button`
  /* border: 1px solid black; */
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
  color: var(--white-color);
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background: var(--main-color);
  /* overflow: hidden; */
  z-index: 0;
`;
// 댓글 등록 버튼
export const CommentEnterBtn = styled.button`
  background-color: var(--sub-color);
  margin-left: 5px;
  &:hover {
    background: var(--main-color);
    box-shadow: 0px 15px 20px rgba(27, 39, 63, 0.4);
    color: whitesmoke;
    transform: translateY(-5px);
  }
  border: 1px solid black;
  border-radius: 5px;
`;
// 모달 창 내 댓글 수정,삭제 시 확인 취소 버튼
export const ModalButton = styled.button`
  width: 40%;
  margin-left: 10px;
  border: none;
  font-weight: bolder;
  color: black;
  background-color: var(--sub-color);
  &:hover {
    background: var(--main-color);
  }
  border: none;
  cursor: pointer;
`;
// 댓글 수정 삭제 버튼
export const CommentButton = styled.button`
  margin: 1px 0 1px 0;
  display: block;
  text-align: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid black;
  background: var(--sub-color);
  color: black;
  padding: 5px 20px;
  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: var(--main-color);
    transform: scale(1);
  }
`;
// 사이드바 페이지 넘기기 버튼
export const PageButton = styled.button`
  background-color: var(--sub-color);
  color: var(--white-color);
  border: none;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--main-color);
  }
  &:disabled {
    background-color: var(--darkgray-color);
    cursor: not-allowed;
  }
`;