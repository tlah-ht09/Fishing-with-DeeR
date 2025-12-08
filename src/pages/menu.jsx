import * as _ from "./style";
import menu_img from "../assets/menu_img.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Menu = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState(
    prompt("당신의 이름은 무엇인가요?", "홍길동")
  );
  return (
    <_.background src={menu_img}>
      <_.menu_bar>
        <_.logo>
          <_.logo_main></_.logo_main>
        </_.logo>
        <_.button_div>
          <_.but
            onClick={() => {
              navigate("/fishingGround");
            }}
          >
            Start
          </_.but>
          <_.but>Setting</_.but>
          <_.but>End</_.but>
        </_.button_div>
      </_.menu_bar>
    </_.background>
  );
};
