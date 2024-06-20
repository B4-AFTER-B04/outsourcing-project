import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: var(--sidebar-color); */
  /* border: 1px solid #2c3e50; */
  /* padding: 10px; */
  background-color: var(--white-color);
  border-radius: 5px;
`;

export const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  margin: 20px auto 10px;
  /* margin-top: 20px;
  margin-left: 120px; */
  height: 130px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 48px;
  border-radius: 5px;
  border: solid 1px var(--lightgray-color);
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.01em;
  padding: 0 12px 0 50px;
  /* border: 1px solid gray; */
  margin-left: 20px;

  & :focus {
    border: 1px solid var(--main-color) !important; // 왜안되는거죠
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  /* top: 172px; */
  top: 50%;
  transform: translateY(-50%);
  left: 35px;
  width: 24px;
  pointer-events: none;
`;
