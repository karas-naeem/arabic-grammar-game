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
    <>
      <h2>النتيجة:{number}/15</h2>
      <button>
        <Link href="/games/1/correct"  style={{
        color:"#000"
      }}>
            الإجابات الصحيحة
        </Link>
      </button>
    </>
  );
}
