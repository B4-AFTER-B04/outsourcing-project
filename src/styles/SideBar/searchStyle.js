import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  border-radius: 5px;
<<<<<<< HEAD
  //   margin-left: 10px;
  //   width: 380px;
=======
//   margin-left: 10px;
//   width: 380px;
>>>>>>> 252c728af1ad3817a385f274c8ae201b544031c6
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

export const SearchInput = styled.input`
  width: 90%;
  height: 48px;
  border-radius: 5px;
  border: solid 1px var(--lightgray-color2);
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.01em;
  padding: 0 12px 0 50px;
  margin-left: 20px;

  &:focus {
    outline: 2px solid var(--main-color) !important;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 35px;
  width: 24px;
  pointer-events: none;
`;
