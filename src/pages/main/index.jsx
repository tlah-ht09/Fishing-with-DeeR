import * as _ from "./style";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import dict from "../../assets/dict.png";
import inven from "../../assets/inven.png";
import shop from "../../assets/shop.png";
import { useEffect, useRef } from "react";

export const FishingGround = () => {
  const navigate = useNavigate();

  const randomRef = useRef((Math.random() * 10000).toFixed(0));
  console.log(randomRef.current);

  return (
    <_.Main>
      <_.back
        src={back}
        onClick={() => {
          navigate("/");
        }}
      ></_.back>
      <_.buttonBar>
        <_.imgDiv>
          <_.buttonImg
            src={dict}
            onClick={() => {
              navigate("/dict");
            }}
          ></_.buttonImg>
          <_.buttonImg
            src={inven}
            onClick={() => {
              navigate("/inven");
            }}
          ></_.buttonImg>
          <_.buttonImg
            src={shop}
            onClick={() => {
              navigate("/shop");
            }}
          ></_.buttonImg>
        </_.imgDiv>
      </_.buttonBar>
    </_.Main>
  );
};
