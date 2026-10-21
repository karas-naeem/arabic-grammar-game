"use client";
import { useContext } from "react";
import { AnswerContext } from "./AnswerContext";
import Link from "next/link";
export default function Result() {
  const { answerData } = useContext(AnswerContext);
  let number = 0;
  answerData.forEach((e) => {
    e.forEach((eI) => {
      eI.forEach((eII) => {
        console.log(eII);
        number += eII;
      });
    });
  });
  return (
    <div style={{
      textAlign:"center",
    }}>
      <h2>النتيجة:{number}/16</h2>
      <button
        style={{
          // box model
          border: "none",
          margin:"5px",
        }}
      >
        <Link
          href="/games/1/correct"
          style={{
            padding: "5px",
            borderRadius: "5px",
            color: "var(--background)",
            background: "var(--foreground)",
          }}
        >
          الإجابات الصحيحة
        </Link>
      </button>
    </div>
  );
}
