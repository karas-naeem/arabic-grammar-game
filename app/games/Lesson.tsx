"use client"

import { useContext } from "react";
import { AnswerContext } from "./[number]/AnswerContext";

export default function Lesson()
{
    const {answerData,SetAnswerData} = useContext(AnswerContext);

    return (
        <form style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }} onSubmit={e => {
            e.preventDefault();
            SetAnswerData([...answerData,[]])
        }}>
            <iframe src="/الفعل اللازم و المتعدي.pdf" frameBorder={0} style={{
                width:"50vw",
                height:"50vh"
            }} allowFullScreen={true}/>
            <button type="submit">
                التالي
            </button>
        </form>
    );

}