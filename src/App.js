import React from "react";
import GlobStyled from "./styled";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import * as S from "./styled";

export default function App() {
  return (
    <S.Cont>
      <GlobStyled />
      <Header />
      <Main />
    </S.Cont>
  );
}
