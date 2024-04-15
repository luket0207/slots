import React, { useState, useEffect } from 'react';
import Buttons from '../Buttons/Buttons';
import Reels from '../Reels/Reels';
import * as Win from '../Methods/Win';
import './Main.scss';
import { Reel } from '../Assets/Data/Reel';

const Main = () => {

    const [reelOnePosition, setReelOnePosition] = useState(0);
    const [reelTwoPosition, setReelTwoPosition] = useState(0);
    const [reelThreePosition, setReelThreePosition] = useState(0);
    const [result, setResult] = useState([0, 0, 0]);
    const [disableAll, setDisableAll] = useState(false);
    const [wumpaSum, setWumpaSum] = useState(0);

    useEffect(() => {
        setReelOnePosition(result[0]);
        setReelTwoPosition(result[1]);
        setReelThreePosition(result[2]);
    }, [result]);

    useEffect(() => {
        // Calculate and set the sum of wumpa values when reel positions change
        const calculateWumpaSum = () => {
            const reelItems = [reelOnePosition, reelTwoPosition, reelThreePosition];
            const wumpaSum = reelItems.reduce((sum, position, index) => {
                const reelItem = Reel[position];
                return sum + reelItem.wumpa;
            }, 0);
            setWumpaSum(wumpaSum);
        };        

        calculateWumpaSum();
    }, [reelOnePosition, reelTwoPosition, reelThreePosition]);

    const handleSpin = () => {
        setDisableAll(true);
        const chance = Math.floor(Math.random() * 1000);
        console.log(chance);

        if (chance > 950) {
            Win.big({ setResult });
        } else if (chance > 800) {
            Win.mid({ setResult });
        } else {
            Win.lose({ setResult, result });
        }

        setTimeout(() => {
            setDisableAll(false);
        }, 1000);
    };

    return (
        <div className="main">
            <Buttons onSpin={handleSpin} disableAll={disableAll} />
            <Reels 
                onSpin={handleSpin} 
                reelOnePosition={reelOnePosition} 
                reelTwoPosition={reelTwoPosition} 
                reelThreePosition={reelThreePosition}
                disableAll={disableAll}
                Reel={Reel}
            />
            <div>Wumpa Sum: {wumpaSum}</div>
        </div>
    );
}

export default Main;
