// Buttons.js
import React from 'react';
import './Buttons.scss';

const Buttons = ({ onSpin, disableAll }) => {
    return (
        <div className="buttons">
            <button onClick={onSpin} disabled={disableAll}>Click</button>
        </div>
    );
}

export default Buttons;
