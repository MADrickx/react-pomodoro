import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

const Controls = ({handlePlay, handleReset, timerBool}) => {

    //icons
    const play = <FontAwesomeIcon icon={faPlay} />
    const pause = <FontAwesomeIcon icon={faPause} />

    const handlePlayOrPause = () =>{
        if (timerBool){
            return pause
        } else {
            return play
        }
    }
    return (
        <div className="controls">
            <button onClick={handlePlay} >{handlePlayOrPause()}</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
}

export default Controls;
