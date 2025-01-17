import React from 'preact/compat';

export const showModal = () => {
    document.querySelector(".modal").style.opacity = "1";
    document.querySelector(".modal").style.display = "flex";
}

const hideModal = () => {
    document.querySelector(".modal").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".modal").style.display = "none";
    }, 200);
}

export default function Modal() {
    return (
        <div className="modal" onClick={() => hideModal()}>
            <div className="modal-content"> 
                <div className="modal-box dark">
                    <text className={"dark"}>The page you are trying to view is currently in development.</text>
                    <text className={"dark"}>Thank you for your patience.</text>
                </div>
            </div>
        </div>
    )
}
