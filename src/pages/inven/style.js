import styled from "@emotion/styled";
import leather from "../../assets/leather.png";

export const main = styled.div`
  width: 1450px;
  height: 700px;
  padding-top: 40px;
  background: url(${leather}) lightgray 50% / cover no-repeat;
`;

export const boardDiv = styled.div`
  width: 1220px;
  height: 668px;
  border-radius: 7px;
  background: #7d3920;
  margin-left: 120px;
`;

export const board = styled.div`
  display: grid;
  width: 945px;
  height: 686px;

  flex-shrink: 0;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(5, minmax(0, 1fr));

  margin-left: 150px;
`;

export const card = styled.div`
  width: 129px;
  height: 129px;
  border-radius: 10px;
  border: 2px solid #fff;
  background: rgba(0, 0, 0, 0.52);
  margin-top: 10px;
`;

export const back = styled.img`
  position: absolute;
  left: 60px;
  bottom: 60px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  border-radius: 100%;
`;
