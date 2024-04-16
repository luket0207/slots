import React, { useState, useEffect } from 'react';
import Buttons from '../Buttons/Buttons';
import Reels from '../Reels/Reels';
import * as Win from '../Methods/Win';
import './Main.scss';
import { Reel } from '../Assets/Data/Reel';
import Crate from '../Crate/Crate';
import Ladder from '../Ladder/Ladder';

const Main = () => {
    const [gameStart, setGameStart] = useState(false);
    const [reelOnePosition, setReelOnePosition] = useState(0);
    const [reelTwoPosition, setReelTwoPosition] = useState(0);
    const [reelThreePosition, setReelThreePosition] = useState(0);
    const [crateValue, setCrateValue] = useState(0);
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
            if (gameStart) {
                const reelItems = [reelOnePosition, reelTwoPosition, reelThreePosition];
                const wumpaSum = reelItems.reduce((sum, position, index) => {
                    const reelItem = Reel[position];
                    return sum + reelItem.wumpa;
                }, 0);
                setTimeout(() => {
                    setWumpaSum(wumpaSum);
                }, 1000);
                
            }
        };        

        calculateWumpaSum();
    }, [reelOnePosition, reelTwoPosition, reelThreePosition]);

    const handleUpdateCrate = () => {
        let newCrateValue;
        do {
            newCrateValue = Math.floor(Math.random() * 6);
        } while (newCrateValue === crateValue); 
        setCrateValue(newCrateValue);
    }

    const handleSpin = () => {
        setDisableAll(true);
        setGameStart(true);
        setWumpaSum(0);
        const chance = Math.floor(Math.random() * 1000);
        console.log(chance);
    
        if (chance > 950) {
            Win.big({ setResult });
        } else if (chance > 800) {
            Win.mid({ setResult });
        } else {
            Win.lose({ setResult, result });
        }
    
        handleUpdateCrate();
    
        setTimeout(() => {
            setDisableAll(false);
        }, 1500);
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
            <Crate value={crateValue}></Crate>
            <Ladder wumpas={wumpaSum} />
        </div>
    );
}

export default Main;
