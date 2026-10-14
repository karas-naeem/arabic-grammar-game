"use client";

import { useContext, useState } from "react";
import { AnswerContext } from "../../games/[number]/AnswerContext";
import "./Complete.css";

interface ICompleteQuestion {
  Question: string;
  Answer: string[];
}

interface ICompleteGame {
  Name: string;
  Data: ICompleteQuestion[];
}

interface IAnswers {
  [questionIndex: number]: {
    [answerIndex: number]: string;
  };
}

export default function CompleteGame({ Name, Data }: ICompleteGame) {
  const [Answers, SetAnswers] = useState<IAnswers>({});
  const { answerData, SetAnswerData } = useContext(AnswerContext);
  console.log(Data)
  const handleAnswerChange = (
    questionIndex: number,
    answerIndex: number,
    value: string,
  ) => {
    SetAnswers((prev) => ({
      ...prev,

      [questionIndex]: {
        ...prev[questionIndex],

        [answerIndex]: value,
      },
    }));
  };

  return (
    <div className="Complete">
      <h2>{Name} :</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newAnswerData = answerData.map((eA,iA) => {
            if(iA+1 == answerData.length)
            {
              return Data.map((iEA,iIA) => {
                return iEA.Answer.map((iIEA,iIIA) => {
                  if(iIEA == Answers?.[iIA]?.[iIIA]){
                    return 1
                  }
                  else{
                    return 0
                  }
                })
              })
            }
            else{
              return eA
            }
          });
          SetAnswerData([...newAnswerData,[]])
        }}
      >
        {Data.map((question, questionIndex) => {
          const QuestionParts = question.Question.split("....................");

          return (
            <div key={questionIndex} className="Question">
              {QuestionParts.map((part, answerIndex) => (
                <span key={answerIndex}>
                  <span>{part}</span>

                  {QuestionParts.length > answerIndex + 1 && (
                    <input
                      type="text"
                      placeholder="....................."
                      value={Answers[questionIndex]?.[answerIndex] ?? ""}
                      onChange={(e) => {
                        handleAnswerChange(
                          questionIndex,
                          answerIndex,
                          e.target.value,
                        );
                      }}
                    />
                  )}
                </span>
              ))}
            </div>
          );
        })}

        <button type="submit">سلّم</button>
      </form>
    </div>
  );
}