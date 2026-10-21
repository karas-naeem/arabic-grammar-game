import Image from "next/image";
import "./page.css";
import GameCard from "@Components/GameCard";

export default function Home() {
  return (
    <div className="page">
      <div className="logo">
        <Image
          src="logo.svg"
          className="logoImage"
          width={200}
          height={200}
          alt="شعار الموقع"
        />
      </div>
      <div className="games">
        <h2>الألعاب</h2>
        <GameCard
          imageSrc="/gamesPosters/game1.png"
          gameLink="/games/1"
          alt="الفعل اللازم و المعتدي"
        />
      </div>
    </div>
  );
}
