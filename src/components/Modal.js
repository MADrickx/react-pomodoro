import React, {useRef} from "react";

export default function Modal({seconds, handleReset}) {
    const modalRef = useRef(null);

    const handleModalClose = () => {
        const modalNode = modalRef.current;
        modalNode.classList.toggle("hidden");
    };

    return (
        <div
            ref={modalRef}
            className={`modal ${seconds === 0 ? "" : "hidden"}`}>
            <div className={"modal__content"}>
                <h1>{`Timer's done`}</h1>
                <div className={"modal__buttons"}>
                    <button type={"button"} onClick={handleModalClose}>
                        {`close`}
                    </button>
                    <button type={"button"} onClick={handleReset}>
                        {`replay`}
                    </button>
                </div>
            </div>
        </div>
    );
}
