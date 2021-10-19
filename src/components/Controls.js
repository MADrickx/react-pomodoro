import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faRedo,
    faPlus,
    faMinus,
} from "@fortawesome/free-solid-svg-icons";

const Controls = ({
    handlePlay,
    handleReset,
    handlePlus,
    handleMinus,
    timerBool,
}) => {
    //icons
    const play = <FontAwesomeIcon icon={faPlay} />;
    const pause = <FontAwesomeIcon icon={faPause} />;
    const redo = <FontAwesomeIcon icon={faRedo} />;
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const minus = <FontAwesomeIcon icon={faMinus} />;

    const handlePlayOrPause = () => {
        if (timerBool) {
            return pause;
        }
        return play;
    };
    return (
        <div className={"controls"}>
            <button type={"button"} onClick={handlePlay}>
                {handlePlayOrPause()}
            </button>
            <button type={"button"} onClick={handleReset}>
                {redo}
            </button>
            <button type={"button"} onClick={handlePlus}>
                {plus}
            </button>
            <button type={"button"} onClick={handleMinus}>
                {minus}
            </button>
        </div>
    );
};

export default Controls;
