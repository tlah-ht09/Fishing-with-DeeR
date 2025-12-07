import styled from "@emotion/styled";
import paper from "../../assets/paper.png";

export const main = styled.div`
  width: 1450px;
  height: 730px;
  flex-shrink: 0;
  background: url(${paper}) lightgray 50% / cover no-repeat;
`;

export const board = styled.div`
  display: flex;
  width: 1173px;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  background-color: red;
`;

export const card_div = styled.div`
  display: flex;
  width: 575px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const card = styled.div`
  width: 300px;
  height: 120px;

  border-radius: 10px;
  border: 2px solid #fff;
  background: #bf9e64;

  display: flex;
  padding: 37px 121px 38px 23px;
  align-items: flex-end;
  gap: 61px;
  align-self: stretch;
`;

export const back = styled.img`
  position: absolute;
  left: 60px;
  bottom: 60px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  border-radius: 100%;
`;
