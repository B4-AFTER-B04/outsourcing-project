import styled from 'styled-components';
import { CommonInput, CommonSelect } from '../../common/inputStyle';
import dropdownIcon from '../../assets/arrow_down.svg';

export const FormWrapper = styled.form`
  border-radius: 5px;
  padding: 10px;
`;

export const Commentscontainer = styled.div`
  margin: 20px 20px 10px 20px;
  border-radius: 5px;

  label {
    font-size: 14px;
    color: var(--black-color);
    font-weight: 500;
    margin-right: 10px;
  }
`;

export const InputNickname = styled(CommonInput)`
  width: 150px;
  font-size: 14px;
  margin-right: 16px;
  box-shadow: none;
`;

export const InputPwd = styled(CommonInput)`
  width: 150px;
  font-size: 14px;
  margin-right: 32px;
  box-shadow: none;
`;

export const RatingSelect = styled(CommonSelect)`
  width: 140px;
  padding-left: 12px;
  background: url(${dropdownIcon}) no-repeat right center; /* 커스텀 드롭다운 아이콘 */
  -webkit-appearance: none; /* 기본 드롭다운 아이콘 제거 (웹킷 브라우저용) */
  -moz-appearance: none; /* 기본 드롭다운 아이콘 제거 (모질라 브라우저용) */
  appearance: none; /* 기본 드롭다운 아이콘 제거 */
  background-size: 28px;
  background-color: var(--white-color);
  box-shadow: none;
  font-size: 14px;

  &:focus {
    border: 1px solid transparent;
    outline: 2px solid var(--main-color);
  }
`;

export const StyledComentBox = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  margin: 0 10px 20px 20px;
  border: solid 1px var(--lightgray-color2);
  width: 100%;
  height: 70px;
  resize: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 15px;

  &:focus {
    border: 1px solid transparent;
    outline: 2px solid var(--main-color);
  }
`;
