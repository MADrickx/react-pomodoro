import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Controls = () => {

    const play = <FontAwesomeIcon icon={faPlay} />

    return (
        <div className="controls">
            <button type="submit">{play}</button>
        </div>
    );
}

export default Controls;
