"use client";
import CompleteGame from "@Components/Games/Complete";
import DragGame from "@Components/Games/Drag";
import "@Components/Games/Main.css";
import { useState } from "react";
import { AnswerContext } from "./AnswerContext";
import Result from "./Result";

export default function Game() {
  const [answerData, SetAnswerData] = useState([[]]);
  console.log(answerData)
  return (
    <AnswerContext.Provider value={{answerData,SetAnswerData}}>
      {
        answerData.length == 1 ?
        <CompleteGame
          Name="اكمل"
          Data={[
            {
              Question:
                "لذا فان الفعل الصحيح هو ما يتكون من .................... و .................... فقط.",
              Answer: ["الفعل", "الفاعل"],
            },
            {
              Question:
                "لذا فان الفعل المعتل هو ما يتكون من .................... و .................... و .....................",
              Answer: ["الفعل", "الفاعل", "المفعول به"],
            },
          ]}
        /> :
        answerData.length == 2 ?
        <CompleteGame
        Name="اعرب"
        Data={[
          {
            Question:
              "يحارب الجنود من أجل الوطن , الجنود تعرب : .................... و علامة رفعه .................... لانه ; ....................",
            Answer: ["فاعل", "الضمة", "جمع تكسير"],
          },
          {
            Question:
              "اصبح الجو بارد , اصبح تعرب: فعل ماضي .................... , بارد تعرب .................... و, علامة نصبه .................... لانه ....................",
            Answer: ["ناسخ ناقص", "مفعول به", "الفتحة", "مفرد"],
          },
        ]}
      />
      :
              answerData.length == 3 ?

      <DragGame
        Data={{
          Places: ["الجمل", "الفعل اللازم", "الفعل المعتدي"],
          Items: [
            {
              item: "صمم ابن مقلة خط الثلث",
              where: 2,
            },
            {
              item: "عاد المسافر من سفره",
              where: 1,
            },
            {
              item: "ردَّت مصر علي اعداءه",
              where: 1,
            },
            {
              item: "تصدر الدول الخليجية العديد من براميل البترول",
              where: 2,
            },
          ],
        }}
      />
      :
        <Result/>
    }
    </AnswerContext.Provider>
  );
}
