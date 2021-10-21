import React, {useState, useCallback} from "react";
import Header from "./Header";
import Timer from "./Timer";
import Controls from "./Controls";
import TimeChooser from "./TimeChooser";
import "../scss/app.scss";
import Modal from "./Modal";
import useInterval from "use-interval";

function App() {
    const [timeSetter, setTimeSetter] = useState(1500);
    const [seconds, setSeconds] = useState(timeSetter); //definir une variable seconds (avec react le fait de devoir utliser une constante fait que l'on peut utiliser le setVariable pour modifier cette valeur en cours d'éxécution, tant qu'on définit useState(valeur))
    const [timerBool, setTimerBool] = useState(false);
    const [timer, setTimer] = useState(0);

    let timerLoop;

    useInterval(() => {
        if (timerBool) {
            // si timerBool est = true exécute le reste
            if (seconds > 0) {
                timerLoop = setSeconds(seconds - 1);
            }
        }
        return seconds;
    }, 1000);

    const handleTimeChange = time => {
        const toUse = time * 60;
        setTimeSetter(toUse);
        setSeconds(toUse);
    };

    function fancyTimeFormat(duration) {
        const hrs = ~~(duration / 3600); // ~~ = math.floor
        const mins = ~~((duration % 3600) / 60);
        const secs = ~~duration % 60;
        let format = "";

        if (hrs > 0) {
            format += `${hrs}:${mins < 10 ? "0" : ""}`;
        }
        format += `${mins}:${secs < 10 ? "0" : ""}`;
        format += `${secs}`;
        return format;
    }

    const handlePlay = () => {
        //element de logic utilisé pour définir quand l'état de l'app est sur play ou pause (pour le timer et l'affichage des boutons par exemple)
        setTimerBool(!timerBool);

        if (timerBool === true) {
            clearTimeout(timerLoop);
            setTimerBool(!timerBool);
        }
    };

    const handleReset = useCallback(() => {
        clearTimeout(timerLoop);
        setTimerBool(false); // fait pause par l'intermédiaire de handlePlay (notre interrupteur logic)
        setTimer(0);
        setSeconds(timeSetter); //remet le compte à timeSetter
    }, [setSeconds, setTimer, setTimerBool]);

    const handlePlus = () => {
        clearTimeout(timerLoop);
        setTimerBool(false); // fait pause par l'intermédiaire de handlePlay (notre interrupteur logic)
        setTimer(0);
        setSeconds(seconds + 60);
    };

    const handleMinus = () => {
        clearTimeout(timerLoop);
        setTimerBool(false); // fait pause par l'intermédiaire de handlePlay (notre interrupteur logic)
        setTimer(0);
        setSeconds(seconds - 60);
    };

    return (
        <>
            <Header />
            <div className={"pomodoro"}>
                <TimeChooser
                    handleTimeChange={handleTimeChange}
                    timeSetter={timeSetter}
                    setTimeSetter={setTimeSetter}
                />
                <Timer
                    seconds={seconds}
                    timer={timer}
                    setTimer={setTimer}
                    fancyTimeFormat={fancyTimeFormat}
                    timerBool={timerBool}
                    timeSetter={timeSetter}
                />
                <Controls
                    timerBool={timerBool}
                    handlePlay={handlePlay}
                    handleReset={handleReset}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />
            </div>
            <Modal seconds={seconds} handleReset={handleReset} />
        </>
    );
}

export default App;
