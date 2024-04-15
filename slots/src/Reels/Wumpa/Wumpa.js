// Buttons.js
import React from 'react';
import './Wumpa.scss';
import WumpaImg from '../../Assets/Images/Wumpa.png';

const Wumpa = ({ amount }) => {
    return (
        <div className="wumpa">
            {amount === 2 && <img className='firstWumpa' src={WumpaImg} alt='Wumpa' />}
            {amount === 0 || 2 && <img src={WumpaImg} alt='Wumpa' />}
        </div>
    );
}

export default Wumpa;
