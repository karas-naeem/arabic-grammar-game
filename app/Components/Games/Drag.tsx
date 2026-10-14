"use client";

import { useContext, useState } from "react";
import "./Drag.css";
import { AnswerContext } from "../../games/[number]/AnswerContext";
interface Iitem {
  item: string;
  where: number;
}

interface IDragGame {
  Data: {
    Places: string[];
    Items: Iitem[];
  };
}

export default function DragGame({ Data }: IDragGame) {
  const [AnswerWhere, SetAnswersWhere] = useState([0, 0, 0, 0]);
  let drag = [];
  const { answerData, SetAnswerData } = useContext(AnswerContext);
  function Drop(where) {
    const newAnswers = AnswerWhere.map((e, i) => {
      if (i == drag[1]) {
        return +where;
      } else {
        return e;
      }
    });
    console.log(newAnswers);
    SetAnswersWhere(newAnswers);
  }
  const ItemsJSX = Data.Items.map((e, i) => {
    return (
      <li
        key={i}
        draggable="true"
        style={{
          cursor: "pointer",
        }}
        onDragStart={(e) => {
          drag[0] = e.currentTarget;
          drag[1] = i;
          e.currentTarget.style.opacity = "0.5";
        }}
        // phone
        onTouchStart={(e) => {
          drag[0] = e.currentTarget;
          drag[1] = i;
          e.currentTarget.style.opacity = "0.5";
        }}
        onDragEnd={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        {e.item}
      </li>
    );
  });
  const PlacesJSX = Data.Places.map((e, i) => {
    return (
      <div
        key={i}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          // styles
          drag[0].style.width = "80%";
          drag[0].style.marginBottom = "5px";
          drag[0].style.listStyle = "none";
          drag[0].style.borderRadius = "5px";
          drag[0].style.position = "relative";
          drag[0].style.left = "50%";
          drag[0].style.transform = "translate(-50%,0)";
          // colors
          drag[0].style.background = "#000";
          drag[0].style.color = "#FFF";
          // appending

          e.currentTarget.append(drag[0]);
          Drop(i);
        }}
        onTouchStart={(e) => {
          // styles
          drag[0].style.width = "80%";
          drag[0].style.marginBottom = "5px";
          drag[0].style.listStyle = "none";
          drag[0].style.borderRadius = "5px";
          drag[0].style.position = "relative";
          drag[0].style.left = "50%";
          drag[0].style.transform = "translate(-50%,0)";
          // colors
          drag[0].style.background = "#000";
          drag[0].style.color = "#FFF";
          // appending

          e.currentTarget.append(drag[0]);
          Drop(i);
        }}
      >
        <h2>{e}</h2>
        <ul>{i == 0 ? ItemsJSX : ""}</ul>
      </div>
    );
  });
  return (
    <div className="Drag">
      <h2>: سحب و وضع</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newAnswerData = Data.Items.map((eP, aP) => {
            console.log(eP,aP)
            if (eP.where === AnswerWhere[aP]) {
              return [1];
            } else {
              return [0];
            }
          });
          console.log(newAnswerData);
          SetAnswerData([...answerData,newAnswerData]);
        }}
      >
        <div className="DragGame">{PlacesJSX}</div>
        <button type="submit">سلّم</button>
      </form>
    </div>
  );
}
