import React from "react";
import RoundBar from "./RoundBar";

export default function Timer({
    seconds,
    fancyTimeFormat,
    timerBool,
    timer,
    setTimer,
    timeSetter,
}) {
    return (
        <div className={"timer"}>
            <div className={"roundBar__container"}>
                <RoundBar
                    timer={timer}
                    setTimer={setTimer}
                    timerBool={timerBool}
                    seconds={seconds}
                    fancyTimeFormat={fancyTimeFormat}
                    timeSetter={timeSetter}
                />
            </div>
        </div>
    );
}
