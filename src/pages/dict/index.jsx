import * as _ from "./style";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";

export const Dict = () => {
  const navigate = useNavigate();
  return (
    <_.main>
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
      <_.back
        src={back}
        onClick={() => {
          navigate("/fishingGround");
        }}
      ></_.back>
    </_.main>
  );
};
