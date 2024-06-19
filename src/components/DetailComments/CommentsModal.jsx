import { useRef, useState } from 'react';
import styled from 'styled-components';

const CommentsModal = ({ setModal }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <div>
        <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
          모달 열기
        </button>
      </div>
      {modalOpen && (
        <div
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div>
            <p>리액트로 모달 구현하기</p>
            <button onClick={() => setModalOpen(false)}>모달 닫기</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentsModal;
