import * as _ from "./style";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Inven = () => {

  const inven = [
    
  ]
  const navigate = useNavigate();

  return (
    <_.main>
      <_.boardDiv>
        <_.board>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
          <_.card></_.card>
        </_.board>
      </_.boardDiv>
      <_.back
        src={back}
        onClick={() => {
          navigate("/fishingGround");
        }}
      ></_.back>
    </_.main>
  );
};
