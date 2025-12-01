import * as _ from "./style";

import slik from "../../assets/slik_lod.png";
import normal from "../../assets/normal_rod.png";
import plastic from "../../assets/plastic_rod.png";
import pororo from "../../assets/Pororo_rod.png";
import mc from "../../assets/mc_rod.png";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Shop = () => {
  const navigate = useNavigate();

  const [money, setMoney] = useState(0);
  return (
    <_.main>
      <_.fishingRopDiv>
        <_.fishingRop>
          <_.fishingRopImg src={slik}></_.fishingRopImg>
          <_.fishingRopT>
            실<br></br>장착됨
          </_.fishingRopT>
        </_.fishingRop>
        <_.fishingRop>
          <_.fishingRopImg src={mc}></_.fishingRopImg>
          <_.fishingRopT>
            나무 낚싯대 <br></br>5000원
          </_.fishingRopT>
        </_.fishingRop>
        <_.fishingRop>
          <_.fishingRopImg src={plastic}></_.fishingRopImg>
          <_.fishingRopT>
            플라스틱 낚싯대<br></br> 10000
          </_.fishingRopT>
        </_.fishingRop>
        <_.fishingRop>
          <_.fishingRopImg src={normal}></_.fishingRopImg>
          <_.fishingRopT>
            평범한 낚싯대<br></br> 25000
          </_.fishingRopT>
        </_.fishingRop>
      </_.fishingRopDiv>

      <_.fishingRop2>
        <_.fishingRopImg2 src={pororo}></_.fishingRopImg2>
        <_.fishingRopT>
          <b>최고급 낚싯대 250만원</b>
        </_.fishingRopT>
      </_.fishingRop2>
      <_.money>$보유금액$ : {money} </_.money>
      <_.back
        src={back}
        onClick={() => {
          navigate("/fishingGround");
        }}
      ></_.back>
    </_.main>
  );
};
