import styled from "@emotion/styled";
import paper from "../../assets/paper.png";

export const main = styled.div`
  width: 1450px;
  height: 730px;
  flex-shrink: 0;
  background: url(${paper}) lightgray 50% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  max-height: 650px;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(139, 115, 85, 0.2);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #8B7355;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #6B5A45;
  }
`;

export const card_div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  padding: 0;
`;

export const card = styled.div`
  width: 520px;
  height: 150px;
  border-radius: 10px;
  border: 2px solid #8B7355;
  background: #BF9E64;
  display: flex;
  padding: 25px;
  align-items: center;
  gap: 30px;
  flex-shrink: 0;
`;

export const fish_icon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 3px solid #5A4A3A;
  background: #6B5A45;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  
  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

export const card_info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white;
  flex: 1;
`;

export const info_text = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const back = styled.img`
  position: absolute;
  left: 60px;
  bottom: 60px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;