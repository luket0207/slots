import React, { useState, useEffect } from 'react';
import './Crate.scss';

const Crate = ({ value }) => {
    const [valueClass, setValueClass] = useState('one');

    useEffect(() => {
        if (value === 0) {
            setValueClass('one');
        } else if (value === 1) {
            setValueClass('two');
        } else if (value === 2) {
            setValueClass('three');
        } else if (value === 3) {
            setValueClass('four');
        } else if (value === 4) {
            setValueClass('five');
        } else if (value === 5) {
            setValueClass('six');
        }
    }, [value]);


    return (
        <div className="crate-container">
            <div className={`crate show-${valueClass}`}>
                <div className="crate__face crate__face--one">1</div>
                <div className="crate__face crate__face--two">2</div>
                <div className="crate__face crate__face--three">3</div>
                <div className="crate__face crate__face--four">4</div>
                <div className="crate__face crate__face--five">5</div>
                <div className="crate__face crate__face--six">6</div>
            </div>
        </div>
    );
}

export default Crate;
