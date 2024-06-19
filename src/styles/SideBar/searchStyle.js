import styled from "styled-components";

export const SearchInput = styled.input`
  display: block;
  position: relative;
  width: 280px ;
  margin: 15px 0 0 10px;
  height: 48px;
  background-color: var(--white-color);
  border-radius: 5px;
  border: solid 1px var(--darkgray-color);
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.01em;
  padding: 0 12px;
`;

export const SearchImg = styled.img`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  width: 30px;
`;