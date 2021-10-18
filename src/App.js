import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import "./scss/app.scss";

function App() {

    const [seconds, setSeconds] = useState(1500); //definir une variable seconds (avec react le fait de devoir utliser une constante fait que l'on peut utiliser le setVariable pour modifier cette valeur en cours d'éxécution, tant qu'on définit useState(valeur))
    const [timerBool, setTimerBool] = useState(false);

    useEffect(() => { //hooks de react -> permet d'utiliser une logic spécifique, à chaque changement, une seule fois ou autre
        if (timerBool){// si timerBool est = true exécute le reste
            if (seconds > 0){//si les secondes sont superieurs à 0 éxécute le reste
                setTimeout(() => setSeconds(seconds - 1), 1000);//setTimeout est que fonction qui va executer une meme 'phrase' en boucle toutes les x (ici 1000) miliseconds
           } else {// si timerBool est = false exécute autre chose
               setSeconds('Break Done'); // définit les secondes avec une mutation en string pour que ça affiche "done"
           }
        } 
    });

    function fancyTimeFormat(duration){   
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600); // ~~ = math.floor
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    const handlePlay = () => {//element de logic utilisé pour définir quand l'était de l'app est sur play ou pause (pour le timer et l'affichage des boutons par exemple)
        if (timerBool){//si timerBool est = true exécute le reste
            setTimerBool(false) //met timerBool sur false (c'est un peu un interrupeur)
        } else { // si timerBool est false éxécute autre chose
            setTimerBool(true) //met timerBool sur true (c'est un peu un interrupeur)
        }
    }

    const handleReset = () => {//fonction qui s'éxécute quand on appuie sur le bouton reset
        setSeconds(1500); //remet le compte à 1500
        setTimerBool(false); // fait pause par l'intermédiaire de handlePlay (notre interrupteur logic)
    }


    return(
        <div className="pomodoro">
            <Timer seconds={fancyTimeFormat(seconds)}/>
            <Controls timerBool={timerBool} handlePlay={handlePlay} handleReset={handleReset}/>
        </div>
    )
}

export default App;
