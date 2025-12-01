import styled from "@emotion/styled";
import paper from "../../assets/paper.png";

export const main = styled.div`
  width: 1450px;
  height: 730px;
  flex-shrink: 0;
  background: url(${paper}) lightgray 50% / cover no-repeat;
`;

export const board = styled.div`
  margin-left: 200px;
  padding-top: 20px;
  display: grid;
  width: 1130px;
  height: 700px;
  row-gap: 0px;
  column-gap: 0px;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

export const card = styled.div`
  width: 120px;
  height: 120px;

  border-radius: 10px;
  border: 2px solid #fff;
  background: #bf9e64;
`;

export const back = styled.img`
  position: absolute;
  left: 60px;
  bottom: 60px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  border-radius: 100%;
`;
