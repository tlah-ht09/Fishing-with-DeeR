import styled from "@emotion/styled";
import wood from "../../assets/wood.png";

export const main = styled.div`
  display: flex;
  width: 1450px;
  height: 740px;
  justify-content: center;
  align-items: center;
  background: #fff;
  flex-shrink: 0;
  background: url(${wood}) lightgray 50% / cover no-repeat;
  margin: auto;
`;

export const fishingRopDiv = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 120px;
  position: absolute;
  left: 10%;
  top: 50px;
`;

export const fishingRop = styled.div`
  display: flex;
  width: 204px;
  flex-direction: column;
  align-items: center;
`;

export const fishingRop2 = styled.div`
  display: flex;
  width: 433px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  position: absolute;
  top: 400px;
  right: 240px;
`;

export const fishingRopImg = styled.img`
  height: 234px;
  align-self: stretch;
  aspect-ratio: 1/1;
  border-radius: 20px;
`;
export const fishingRopT = styled.p`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const fishingRopImg2 = styled.img`
  height: 234px;
  align-self: stretch;
  aspect-ratio: 463/234;
  border-radius: 20px;
`;

export const back = styled.img`
  position: absolute;
  left: 60px;
  bottom: 60px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  border-radius: 100%;
`;

export const money = styled.div`
  position: absolute;
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  bottom: 20px;
  right: 36px;
`;
