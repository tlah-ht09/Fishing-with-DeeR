import * as _ from "./style";
import menu_img from "../assets/menu_img.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { user_name } from "../jotai";

export const Menu = () => {
  const navigate = useNavigate();

  const setName = useSetAtom(user_name);

  const [userName, setUserName] = useState("");
  const hasPrompted = useRef(false);
  useEffect(() => {
    if (hasPrompted.current) return;
    hasPrompted.current = true;

    const name = prompt("당신의 이름은 무엇인가요?", "user");
    setUserName(name);
  }, []);

  useEffect(() => {
    setName(userName);
  }, [userName]);
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
