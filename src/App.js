import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import TimeChooser from "./components/TimeChooser";
import "./scss/app.scss";
import Modal from "./components/Modal";

function App() {
    const [timeSetter, setTimeSetter] = useState(1500);
    const [seconds, setSeconds] = useState(timeSetter); //definir une variable seconds (avec react le fait de devoir utliser une constante fait que l'on peut utiliser le setVariable pour modifier cette valeur en cours d'éxécution, tant qu'on définit useState(valeur))
    const [timerBool, setTimerBool] = useState(false);
    const [timer, setTimer] = useState(0);

    let timerLoop;

    useEffect(() => {
        //hooks de react -> permet d'utiliser une logic spécifique, à chaque changement, une seule fois ou autre
        if (timerBool) {
            // si timerBool est = true exécute le reste
            if (seconds > 0) {
                //si les secondes sont superieurs à 0 éxécute le reste
                timerLoop = setTimeout(() => setSeconds(seconds - 1), 1000); //setTimeout est que fonction qui va executer une meme 'phrase' en boucle toutes les x (ici 1000) miliseconds
            }
        }
    });

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
        //element de logic utilisé pour définir quand l'était de l'app est sur play ou pause (pour le timer et l'affichage des boutons par exemple)
        setTimerBool(!timerBool);

        if (timerBool === true) {
            clearTimeout(timerLoop);
            setTimerBool(!timerBool);
        }
    };

    const handleReset = () => {
        //fonction qui s'éxécute quand on appuie sur le bouton reset
        setTimerBool(false); // fait pause par l'intermédiaire de handlePlay (notre interrupteur logic)
        clearTimeout(timerLoop);
        setSeconds(timeSetter); //remet le compte à timeSetter
        setTimer(0);
    };

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
