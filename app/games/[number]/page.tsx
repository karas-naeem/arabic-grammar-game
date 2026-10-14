import Game from "./Game";

export default function LessonPage() {
  
  return (
    <div
      style={{
        // position
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Game/>
    </div>
  );
}
