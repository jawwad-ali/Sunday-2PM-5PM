'use client'
import { useState, useEffect } from "react";

function LearnUseEffect() {

    const [timer, setTimer] = useState(60);
    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)

        if (timer == 0) {
            console.log('Timer is over')
        }
    }, [timer])
    return (
        <div>
            <h1 className="text-9xl text-center">{timer}</h1>
        </div>

    );
}
export default LearnUseEffect;