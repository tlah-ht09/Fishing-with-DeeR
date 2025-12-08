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
  cursor: pointer;
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
  flex-direction: column;
  height: 100px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 30px;
  margin-top: 300px;
  margin-left: 30px;
`;

export const buttonImg = styled.img`
  width: 69.667px;
  height: 50.825px;
  flex-shrink: 0;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const StatusContainer = styled.div`
  text-align: right;
  margin-right: 50px;
  margin-top: 30px;
  color: white;
`;

export const StatusTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FishingText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #333;
`;

export const FishImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const FishInfo = styled.div`
  text-align: center;
`;

export const FishName = styled.h3`
  margin: 10px 0;
  color: #333;
`;

export const FishDetail = styled.p`
  margin: 5px 0;
  color: #666;
`;

export const ConfirmButton = styled.button`
  margin-top: 10px;
  padding: 10px 30px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
