import styled from "styled-components";

export const MainWrapper = styled.section`
  padding: 15px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgQuiz = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  background-color: purple;
  height: 40vh;
  border-radius: 0 0 20px 20px;
`;
export const ButtonsWrapper = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(30, 131, 157, 58%);
`;

export const ButtonBack = styled.button`
  width: 120px;
  padding: 10px 0;
  border-radius: 25px;
  border: none;
`;

export const ButtonStart = styled.button`
  width: 120px;
  padding: 10px 0;
  background-color: #585858;
  color: #ffff;
  border-radius: 25px;
  border: none;
`;
