import styled from "@emotion/styled";
import fishingGround from "../../assets/fishingGround.png";

export const Main = styled.div`
  width: 99vw;
  height: 95vh;
  flex-shrink: 0;

  background: url(${fishingGround}) lightgray 50% / cover no-repeat;
`;

export const back = styled.img`
  position: absolute;
  left: 60px;
  bottom: 60px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  border-radius: 100%;
`;

export const buttonBar = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const imgDiv = styled.div`
  display: flex;
  height: 100px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const buttonImg = styled.img`
  width: 69.667px;
  height: 50.825px;
  flex-shrink: 0;
`;
