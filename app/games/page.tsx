import GameCard from "@Components/GameCard";

import "./page.css"

export default function GamesPage() {
  return (
      <div className="gamesCardPlace">
            <GameCard imageSrc="/gamesPosters/game1.png" gameLink="/games/1" alt="الفعل اللازم و المعتدي" />
      </div>
  );
}
