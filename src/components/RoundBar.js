import React, {useState} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import useInterval from "use-interval";

export default function RoundBar({
    seconds,
    fancyTimeFormat,
    timerBool,
    timer,
    setTimer,
    timeSetter,
}) {
    // eslint-disable-next-line no-unused-vars
    const [maxTime, setMaxTime] = useState(null);

    useInterval(() => {
        setMaxTime(timeSetter);
        if (timerBool) {
            // si timerBool est = true exécute le reste
            if (seconds > 0) {
                setTimer(timer + 1);
            }
        }
        return timer;
    }, 1000);

    return (
        <>
            <div className={"roundBar"}>
                <CircularProgressbar
                    value={timer + 1}
                    maxValue={maxTime}
                    text={fancyTimeFormat(seconds)}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",

                        // Text size
                        textSize: "10px",

                        // How long animation takes to go from one seconds to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Colors
                        pathColor: `#000`,
                        textColor: "#000",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#f88",
                    })}
                />
            </div>
        </>
    );
}
