import React, {useState, useEffect} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";

export default function RoundBar({
    seconds,
    fancyTimeFormat,
    timerBool,
    timer,
    setTimer,
    setSeconds,
    timeSetter,
}) {
    // eslint-disable-next-line no-unused-vars
    const [maxTime, setMaxTime] = useState(timeSetter);

    useEffect(() => {
        //hooks de react -> permet d'utiliser une logic spécifique, à chaque changement, une seule fois ou autre
        if (timerBool) {
            // si timerBool est = true exécute le reste
            if (seconds > 0) {
                //si les secondes sont superieurs à 0 éxécute le reste
                if (timer < maxTime) {
                    setTimeout(() => setTimer(timer + 1), 1000); //setTimeout est que fonction qui va executer un meme code en boucle toutes les x (ici 1000) miliseconds
                }
            } else {
                // si timerBool est = false exécute autre chose
                setSeconds("Break Done"); // définit les secondes avec une mutation en string pour que ça affiche "break done"
            }
        }
    });

    return (
        <>
            <div className={"roundBar"}>
                <CircularProgressbar
                    value={timer + 1}
                    maxValue={seconds}
                    text={fancyTimeFormat(seconds)}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "round",

                        // Text size
                        textSize: "10px",

                        // How long animation takes to go from one seconds to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Colors
                        pathColor: `#f88`,
                        textColor: "#f88",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#f88",
                    })}
                />
            </div>
        </>
    );
}
