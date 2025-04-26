import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  body {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    background-color: #f2d492;
}
`;
export const Cont = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default GlobStyled;
