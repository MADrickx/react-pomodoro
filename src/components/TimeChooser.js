import React from "react";

const TimeChooser = ({handleTimeChange}) => (
    <>
        <div className={"timeChooser"}>
            <button
                type={"button"}
                onClick={() => {
                    handleTimeChange(25);
                }}>
                {25}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    handleTimeChange(15);
                }}>
                {15}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    handleTimeChange(5);
                }}>
                {5}
            </button>
        </div>
    </>
);

export default TimeChooser;
