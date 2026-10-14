"use client";

import { useEffect, useState } from "react";

export default function LoadingPage(){
    const [DotsCount,SetDotsCount] = useState(0);    
    useEffect(() => {
        setInterval(() => {
            SetDotsCount(DotsCount + 1)
        }, 100);
    },[DotsCount])
    return(
        <h2 style={{
            direction:"rtl",
            // position
            position:"absolute",
            left:"50%",
            top:"50%",
            transform:"tranlate(-50%,-50%)"
        }}>
            أنتظر {".".repeat(DotsCount % 3)}
        </h2>
    )
}