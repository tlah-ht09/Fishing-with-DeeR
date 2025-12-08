import * as _ from "./style";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import dict from "../../assets/dict.png";
import inven from "../../assets/inven.png";
import shop from "../../assets/shop.png";
import { use, useEffect, useRef, useState } from "react";
import { fish } from "./fish";
import { io } from "socket.io-client";
import { user_name, money, equippedRod } from "../../jotai.js"; // equippedRod 추가

import crown_fish from "../../assets/fishing/crownfish.png";
import shoes from "../../assets/fishing/shoes.png";
import bear from "../../assets/fishing/bear.png";
import seahorse from "../../assets/fishing/seahorse.png";
import mang from "../../assets/fishing/mang.png";
import jang from "../../assets/fishing/jang.png";
import bluetang from "../../assets/fishing/bluetang.png";
import blobfish from "../../assets/fishing/blobfish.png";
import luckyfish from "../../assets/fishing/luckyfish.png";
import highfish from "../../assets/fishing/highfish.png";
import angelfish from "../../assets/fishing/angelfish.png";
import flyfish from "../../assets/fishing/flyfish.png";
import shark from "../../assets/fishing/shark.png";
import tuna from "../../assets/fishing/tuna.png";
import dogfish from "../../assets/fishing/dogfish.png";
import whale from "../../assets/fishing/whale.png";
import unicorn from "../../assets/fishing/unicorn.png";
import faker from "../../assets/fishing/faker.png";
import teacher from "../../assets/fishing/teacher.png";
import deer from "../../assets/fishing/deer.png";
import { useAtomValue, useSetAtom } from "jotai";

const img_list = {
  흰동가리: crown_fish,
  신발: shoes,
  곰돌이미역: bear,
  해마: seahorse,
  망둥어: mang,
  뱀장어: jang,
  블루탱: bluetang,
  블롭피쉬: blobfish,
  복어: luckyfish,
  고등어: highfish,
  엔젤피쉬: angelfish,
  날치: flyfish,
  상어: shark,
  참치: tuna,
  개복치: dogfish,
  고래: whale,
  유니콘: unicorn,
  페이커: faker,
  지혜쌤: teacher,
  사슴: deer,
};

const SOCKET_SERVER_URL = "http://10.150.2.5:5001";

// 낚싯대 정보 매핑
const rodStartValues = {
  실: 0,
  나무: 1000,
  플라스틱: 3000,
  평범한: 5000,
  최고급: 7000,
};

export const FishingGround = () => {
  const navigate = useNavigate();

  const setMoney = useSetAtom(money);
  const currentRod = useAtomValue(equippedRod); // 현재 장착된 낚싯대

  const user = useAtomValue(user_name);
  const [fishing, setFishing] = useState(false);
  const [value, setValue] = useState();
  const [getFish, setGetFish] = useState();
  const [fishWeight, setFishWeight] = useState();
  const [price, setPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [fishingText, setFishingText] = useState("낚시 중...");

  // 동적으로 min 값 설정
  const min = rodStartValues[currentRod] || 0;
  const max = 10000;
  const r = useRef(-1);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on("connect", () => {
      console.log("WebSocket 연결 성공!");
    });

    socket.on("disconnect", () => {
      console.log("WebSocket 연결 끊김");
    });

    socket.on("fishing_update", (data) => {
      console.log("서버 신호 수신:", data.fishing);
      setFishing(data.fishing);

      if (!data.fishing) {
        r.current = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("랜덤 값 (min:", min, "max:", max, "):", r.current);

        if (0 <= r.current && r.current < 5600) {
          setValue(fish.normal);
        } else if (5600 <= r.current && r.current < 8600) {
          setValue(fish.rear);
        } else if (8600 <= r.current && r.current < 9600) {
          setValue(fish.unique);
        } else if (9600 <= r.current && r.current < 10000) {
          setValue(fish.legend);
        } else if (r.current === 10000) {
          setValue(fish.hidden);
        }
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [min, max]); // min 값 변경시 재구독

  useEffect(() => {
    if (!fishing && value && value.length > 0) {
      const caught = value[Math.floor(Math.random() * value.length)];
      setGetFish(caught);

      const weight = (Math.random() * (100 - 30 + 1) + 30).toFixed(2);
      setFishWeight(weight);

      const numericWeight = parseFloat(weight);
      setPrice((numericWeight + 5) * 3 * 1000);

      console.log("잡힌 물고기 등급:", value);
      console.log("잡힌 물고기:", caught);
      console.log("물고기 무게:", weight);
      console.log("가격:", (weight + 5) * 3 * 1000);

      setShowResult(true);
    } else if (!fishing && (!value || value.length === 0)) {
      setGetFish(null);
      setFishWeight(0);
      setPrice(0);
      console.log("놓침");
    }
  }, [fishing, value]);

  useEffect(() => {
    setMoney((prev) => prev + price);
  }, [price]);

  useEffect(() => {
    if (getFish && fishWeight && price) {
      fetch("http://10.150.2.5:5001/api/rank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: user,
          fish_name: getFish,
          weight: fishWeight,
          price: price,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("서버 응답:", data);
        })
        .catch((err) => {
          console.error("에러:", err);
        });
    }
  }, [getFish, fishWeight, price, user]);

  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => {
        handleCloseResult();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showResult]);

  useEffect(() => {
    if (fishing) {
      setFishingText("낚시 중...");

      const timer = setTimeout(() => {
        setFishingText("!!!!!!!!!!!!!!!!!!!!");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setFishingText("낚시 중...");
    }
  }, [fishing]);

  const handleCloseResult = () => {
    setShowResult(false);
    setGetFish(null);
    setValue(null);
    setFishWeight(0);
    setPrice(0);
  };

  return (
    <_.Main>
      <_.back src={back} onClick={() => navigate("/")} />

      <_.buttonBar>
        <_.imgDiv>
          <_.buttonImg src={dict} onClick={() => navigate("/dict")} />
          <_.buttonImg
            src={inven}
            onClick={() => {
              alert("가방을 구매해야합니다!!");
            }}
          />
          <_.buttonImg src={shop} onClick={() => navigate("/shop")} />
        </_.imgDiv>
      </_.buttonBar>

      {fishing && (
        <_.Overlay>
          <_.FishingText>{fishingText}</_.FishingText>
        </_.Overlay>
      )}

      {showResult && !fishing && getFish && (
        <_.ModalOverlay onClick={handleCloseResult}>
          <_.ModalContent onClick={(e) => e.stopPropagation()}>
            <_.ModalTitle>낚시 성공!</_.ModalTitle>
            <_.FishImage src={img_list[getFish]} alt={getFish.name} />
            <_.FishInfo>
              <_.FishName>{getFish.name}</_.FishName>
              <_.FishDetail>낚은 물고기: {getFish}</_.FishDetail>
              <_.FishDetail>무게: {fishWeight}kg</_.FishDetail>
              <_.FishDetail>가격: {price?.toLocaleString()}원</_.FishDetail>
            </_.FishInfo>
            <_.ConfirmButton onClick={handleCloseResult}>확인</_.ConfirmButton>
          </_.ModalContent>
        </_.ModalOverlay>
      )}
    </_.Main>
  );
};
