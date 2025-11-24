import * as _ from "./style";
import menu_img from "../assets/menu_img.png";

export const Menu = () => {
  return (
    <_.background src={menu_img}>
      <_.menu_bar>
        <_.logo>
          <_.logo_main></_.logo_main>
        </_.logo>
        <_.button_div>
          <_.but>Start</_.but>
          <_.but>Setting</_.but>
          <_.but>End</_.but>
        </_.button_div>
      </_.menu_bar>
    </_.background>
  );
};
