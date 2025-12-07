import * as _ from "./style";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import dict from "../../assets/dict.png";
import inven from "../../assets/inven.png";
import shop from "../../assets/shop.png";
import { useEffect, useRef, useState } from "react";
import { fish } from "./fish";

export const FishingGround = () => {
  const navigate = useNavigate();

  const [min, setMin] = useState(5000); //db에 저장된 낚싯대 정보에 따라 조정
  const max = 10000;

  const random = useRef(Math.floor(Math.random() * (max - min + 1)) + min);
  console.log(random.current);
  const [value, setValue] = useState();

  //랜덤 값에 따라 물고기 등급 결정
  useEffect(() => {
    if (0 <= random.current && random.current < 5600) {
      setValue(fish.normal);
    } else if (5600 <= random.current < 8600) {
      setValue(fish.rear);
    } else if (8600 <= random.current < 9600) {
      setValue(fish.unique);
    } else if (9600 <= random.current < 10000) {
      setValue(fish.legend);
    } else if (random.current == 10000) {
      setValue(fish.hidden);
    }
    console.log(value);
  });

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
