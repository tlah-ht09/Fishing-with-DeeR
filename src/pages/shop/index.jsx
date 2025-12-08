import * as _ from "./style";

import slik from "../../assets/slik_lod.png";
import normal from "../../assets/normal_rod.png";
import plastic from "../../assets/plastic_rod.png";
import pororo from "../../assets/Pororo_rod.png";
import mc from "../../assets/mc_rod.png";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { money, equippedRod } from "../../jotai.js"; // equippedRod 추가
import { useAtom } from "jotai";

export const Shop = () => {
  const navigate = useNavigate();
  const [c_money, setMoney] = useAtom(money);
  const [currentRod, setCurrentRod] = useAtom(equippedRod); // Jotai로 관리
  const [ownedRods, setOwnedRods] = useState(["실"]);

  // 낚싯대 정보
  const rods = [
    { id: "실", name: "실", price: 0, img: slik, start: 0 },
    { id: "나무", name: "나무 낚싯대", price: 5000, img: mc, start: 1000 },
    {
      id: "플라스틱",
      name: "플라스틱 낚싯대",
      price: 100000,
      img: plastic,
      start: 3000,
    },
    {
      id: "평범한",
      name: "평범한 낚싯대",
      price: 250000,
      img: normal,
      start: 5000,
    },
    {
      id: "최고급",
      name: "최고급 낚싯대",
      price: 25000000,
      img: pororo,
      start: 7000,
    },
  ];

  // localStorage에서 데이터 불러오기
  useEffect(() => {
    const savedEquipped = localStorage.getItem("equippedRod");
    const savedOwned = localStorage.getItem("ownedRods");

    if (savedEquipped) setCurrentRod(savedEquipped);
    if (savedOwned) setOwnedRods(JSON.parse(savedOwned));
  }, []);

  // 낚싯대 구매 함수
  const buyRod = (rod) => {
    if (ownedRods.includes(rod.id)) {
      alert("이미 보유한 낚싯대입니다!");
      return;
    }

    if (c_money < rod.price) {
      alert("돈이 부족합니다!");
      return;
    }

    setMoney(c_money - rod.price);
    const newOwnedRods = [...ownedRods, rod.id];
    setOwnedRods(newOwnedRods);

    localStorage.setItem("ownedRods", JSON.stringify(newOwnedRods));

    alert(`${rod.name}을(를) 구매했습니다!`);
  };

  // 낚싯대 장착 함수
  const equipRod = (rodId) => {
    if (!ownedRods.includes(rodId)) {
      alert("보유하지 않은 낚싯대입니다!");
      return;
    }

    setCurrentRod(rodId); // Jotai 상태 업데이트
    localStorage.setItem("equippedRod", rodId);
    alert("낚싯대를 장착했습니다!");
  };

  // 낚싯대 카드 렌더링 함수
  const renderRodCard = (rod, isSpecial = false) => {
    const isOwned = ownedRods.includes(rod.id);
    const isEquipped = currentRod === rod.id;

    const RodComponent = isSpecial ? _.fishingRop2 : _.fishingRop;
    const ImgComponent = isSpecial ? _.fishingRopImg2 : _.fishingRopImg;

    return (
      <RodComponent
        key={rod.id}
        onClick={() => {
          if (isEquipped) return;
          if (isOwned) {
            equipRod(rod.id);
          } else if (rod.price > 0) {
            buyRod(rod);
          }
        }}
        style={{ cursor: isEquipped ? "default" : "pointer" }}
      >
        <ImgComponent src={rod.img} />
        <_.fishingRopT>
          {isSpecial && <b>{rod.name}</b>}
          {!isSpecial && (
            <>
              {rod.name}
              <br />
            </>
          )}
          {isEquipped && "장착됨"}
          {!isEquipped && isOwned && "보유중"}
          {!isEquipped &&
            !isOwned &&
            rod.price > 0 &&
            `${rod.price.toLocaleString()}원`}
        </_.fishingRopT>
      </RodComponent>
    );
  };

  return (
    <_.main>
      <_.fishingRopDiv>
        {rods.slice(0, 4).map((rod) => renderRodCard(rod))}
      </_.fishingRopDiv>

      {renderRodCard(rods[4], true)}

      <_.money>$보유금액$ : {c_money.toLocaleString()}원</_.money>
      <_.back
        src={back}
        onClick={() => {
          navigate("/fishingGround");
        }}
      />
    </_.main>
  );
};
