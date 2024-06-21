import styled from 'styled-components';
import { CommonInput } from '../common/inputStyle';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  border-radius: 5px;
  //   margin-left: 10px;
  //   width: 380px;
`;

export const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  margin: 20px auto 10px;
  height: 130px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled(CommonInput)`
  width: 90%;
  padding: 0 12px 0 50px;
  margin-left: 15px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 32px;
  width: 24px;
  pointer-events: none;
`;
