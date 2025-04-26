import styled from "styled-components";

export const Box = styled.div`
  width: 40%;
  height: 73.9vh;
  border-radius: 2vw;
  padding: 2%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 90%;
    height: 83vh;
  }
`;
export const ImgDog = styled.img`
  width: 30vw;
  height: 50vh;
  object-fit: contain;
  @media (max-width: 700px) {
    width: 80vw;
    height: 70vh;
  }
`;
export const ContBtn = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 2vw;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Btn = styled.button`
  border: none;
  background-color: #0096c7;
  color: white;
  font-size: 1.8vw;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  border-radius: 1vw;
  padding: 3%;
  position: relative;
  z-index: 2;
  ::before {
    content: "";
    width: 0%;
    height: 100%;
    border-radius: 0.9vw;
    position: absolute;
    background-color: #bc6c25;
    left: 0;
    top: 0;
    z-index: -1;
  }
  :hover::before {
    width: 100%;
    transition: 0.5s linear;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;
