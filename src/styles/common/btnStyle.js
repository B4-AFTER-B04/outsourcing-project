import styled from 'styled-components';

export const CommonButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

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
export const SideBarDetailBtn = styled(CommonButton)`
  width: 80px;
  color: var(--white-color);
  font-weight: bold;
  background: var(--main-color);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--sub-color);
    transform: scale(1.02);
  }
`;

// 댓글 등록 버튼
export const CommentEnterBtn = styled(CommonButton)`
  margin: 0 20px 20px 0;
  width: 80px;
  height: auto;
  border-radius: 5px;
  color: var(--white-color);
  background-color: var(--sub-color);
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: var(--main-color);
    transform: scale(1.02);
  }

  border: none;
  border-radius: 5px;
`;

// 모달 창 내 댓글 수정,삭제 시 확인 취소 버튼
export const ModalButton = styled(CommonButton)`
  width: 30%;
  margin-left: 10px;
  border: none;
  font-weight: 400;
  color: var(--black-color);
  background-color: var(--sub-color);

  &:hover {
    background: var(--main-color);
    color: var(--white-color);
  }
  border: none;
  cursor: pointer;
`;

// 댓글 수정 삭제 버튼
export const CommentButton = styled(CommonButton)`
  text-align: center;
  text-decoration: none;
  font-weight: 400;
  width: 80px;
  height: 36px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;

  color: var(--white-color);
  background-color: var(--sub-color);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: var(--main-color);
    transform: scale(1.02);
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
