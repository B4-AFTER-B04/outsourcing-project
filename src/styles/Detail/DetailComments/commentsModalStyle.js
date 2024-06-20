import styled from 'styled-components';

export const ModalBoxWrapper = styled.div`
  position: fixed;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border: 2px solid var(--main-color);
  padding: 24px;
`;

export const ModalBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 28px;
`;

export const ModalInputs = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;

  p {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const FixInputcontent = styled.textarea`
  margin: 10px 0;
  resize: none;
  padding: 50px;
  width: 90%;
  max-width: 600px;
  border-radius: 5px;

  &:focus {
    border: 1px solid transparent;
    outline: 1.5px solid var(--darkgray-color);
  }
`;

export const ChangeInputPassword = styled.input`
  padding: 6px;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  margin-top: 10px;
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;
