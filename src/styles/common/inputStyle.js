import styled from 'styled-components';

export const CommonInput = styled.input`
  /* width: 90%; */
  height: 48px;
  border-radius: 5px;
  border: solid 1px var(--lightgray-color2);
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.01em;
  padding-left: 12px;
  padding-right: 12px;

  &::placeholder {
    color: var(--placeholder-color);
  }

  &:focus {
    border: 1px solid transparent;
    outline: 2px solid var(--main-color) !important;
  }
`;

export const CommonSelect = styled.select`
  height: 48px;
  border-radius: 5px;
  border: solid 1px var(--lightgray-color2);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);

  option[value=''] {
    color: var(--placeholder-color); // 기본 옵션의 색상 변경
  }
`;
