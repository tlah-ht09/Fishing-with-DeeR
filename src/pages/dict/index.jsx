import * as _ from "./style";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
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


export const Dict = () => {
  const navigate = useNavigate();

  const fishData = [
    { id: 1, name: "흰동가리", grade: 1, weight: "1 ~ 10", price: "3,000", img: crown_fish },
    { id: 2, name: "신발", grade: 1, weight: "0.3 ~ 0.5", price: "1,000", img: shoes },
    { id: 3, name: "곰돌이 미역", grade: 1, weight: "1 ~ 100", price: "9,000", img: bear},
    { id: 4, name: "해마", grade: 1, weight: "0.5 ~ 0.8", price: "9,000", img: seahorse },
    { id: 5, name: "망둥어", grade: 1, weight: "0.4 ~ 0.6", price: "8,000", img: mang },
    { id: 6, name: "뱀장어", grade: 1, weight: "1 ~ 8", price: "10,000", img: jang },
    { id: 7, name: "블루탱", grade: 1, weight: "1 ~ 7", price: "40,000", img: bluetang },
    { id: 8, name: "블롭피쉬", grade: 2, weight: "2 ~ 8", price: "20,000", img: blobfish },
    { id: 9, name: "복어", grade: 2, weight: "2 ~ 7", price: "10,000", img: luckyfish },
    { id: 10, name: "고등어", grade: 2, weight: "3 ~ 13", price: "10,000", img: highfish },
    { id: 11, name: "엔젤피쉬", grade: 2, weight: "3 ~ 15", price: "20,000", img: angelfish },
    { id: 12, name: "날치", grade: 2, weight: "5 ~ 12", price: "30,000", img: flyfish },
    { id: 13, name: "상어", grade: 3, weight: "50 ~ 70", price: "90,000", img: shark },
    { id: 14, name: "참치", grade: 3, weight: "70 ~ 90", price: "100,000", img: tuna },
    { id: 15, name: "개복치", grade: 3, weight: "60 ~ 80", price: "100,000", img: dogfish },
    { id: 16, name: "고래", grade: 3, weight: "70 ~ 100", price: "300,000", img: whale },
    { id: 17, name: "유니콘", grade: 4, weight: "1 ~ 100", price: "500,000", img: unicorn },
    { id: 18, name: "지혜쌤", grade: 4, weight: "45", price: "???", img: teacher },
    { id: 19, name: "페이커", grade: 4, weight: "56", price: "765,805", img: faker },
    { id: 20, name: "사슴", grade: 5, weight: "1~100", price: "1,000,000", img: deer },
  ];

  const renderStars = (grade) => {
    return "⭐".repeat(grade);
  };

  const FishCard = ({ fish }) => (
    <_.card>
      <_.fish_icon>
        {fish.img ? (
          <img src={fish.img} alt={fish.name} />
        ) : (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <ellipse cx="35" cy="30" rx="20" ry="15" fill="white" stroke="black" strokeWidth="2"/>
            <circle cx="42" cy="27" r="3" fill="black"/>
            <path d="M15 20 L15 40 L5 30 Z" fill="#4A9FD8" stroke="black" strokeWidth="2"/>
            <path d="M33 18 L38 15 L35 20 Z" fill="#4A9FD8"/>
            <path d="M33 42 L38 45 L35 40 Z" fill="#4A9FD8"/>
          </svg>
        )}
      </_.fish_icon>
      <_.card_info>
        <_.info_text>이름 : {fish.name}</_.info_text>
        <_.info_text>등급 : {renderStars(fish.grade)}</_.info_text>
        <_.info_text>무게 : ({fish.weight})</_.info_text>
        <_.info_text>평균 가격 : {fish.price}</_.info_text>
      </_.card_info>
    </_.card>
  );

  // 데이터를 2행으로 나누기
  const halfLength = Math.ceil(fishData.length / 2);
  const topRow = fishData.slice(0, halfLength);
  const bottomRow = fishData.slice(halfLength);

  return (
    <_.main>
      <_.board>
        <_.card_div>
          {topRow.map((fish) => (
            <FishCard key={fish.id} fish={fish} />
          ))}
        </_.card_div>
        <_.card_div>
          {bottomRow.map((fish) => (
            <FishCard key={fish.id} fish={fish} />
          ))}
        </_.card_div>
      </_.board>
      <_.back
        src={back}
        onClick={() => {
          navigate("/fishingGround");
        }}
        alt="뒤로가기"
      />
    </_.main>
  );
};