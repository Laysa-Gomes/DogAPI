import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

export default function () {
  const [dog, setdog] = useState([]);
  const dogApi = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setdog(response.data.message);
    });
  };
  return (
    <>
      <S.Box>
        <S.ContBtn>
          <S.ImgDog src={dog} alt="Doguinhos" />
          <S.Btn onClick={() => dogApi()}>
            Para ver os doguinhos clique aqui
          </S.Btn>
        </S.ContBtn>
      </S.Box>
    </>
  );
}
