import styled from "@emotion/styled";
import menu_img from "../assets/menu_img.png";
import logo_img from "../assets/logo.png";

export const background = styled.div`
  width: 99vw;
  height: 97.5vh;
  background: url(${menu_img}) no-repeat center top; /* top 기준으로 정렬 */
  background-size: contain; /* 이미지 전체가 보이도록 크기 조정 */
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const menu_bar = styled.div`
  display: flex;
  width: 28vw;
  height: 100%;
  max-width: 536px;
  flex-direction: column;
  align-items: center;
  gap: 132px;

  padding-left: 20px;
  padding-right: 20px;
`;

export const logo = styled.div`
  margin-top: 60px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 30px;
  background: #fff;
`;

export const logo_main = styled.div`
  height: 214.726px;
  align-self: stretch;
  aspect-ratio: 496/214.73;
  background: url(${logo_img}) white 50% / contain no-repeat;
`;
export const button_div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const but = styled.div`
  width: 200px;
  display: flex;
  max-width: 250px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background: #fff;

  font-size: 30px;
`;
