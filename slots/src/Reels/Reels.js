// Reels.js
import React from 'react';
import './Reels.scss';
import Wumpa from './Wumpa/Wumpa';


const Reels = ({ onSpin, reelOnePosition, reelTwoPosition, reelThreePosition, Reel }) => {
  const symbolSize = 200;
  const marginSize = 10;
 
  const calcTop = (pos) => {
    const newPos = pos * (symbolSize + marginSize) - ((pos * (symbolSize + marginSize)) * 2);
    return newPos
  }

  const windowStyles = {
    width: `${(symbolSize * 3 ) + (marginSize * 4)}px`,
    height: `${symbolSize + (marginSize * 2)}px`,
  };

  const symbolStyles = {
    width: `${symbolSize}px`,
    height: `${symbolSize}px`,
    margin: `${marginSize}px`,
  };  

  return (
    <div className="reels">
        <div className="window" style={{ ...windowStyles }}>
            <div className='reel reelOne' style={{top: `${calcTop(reelOnePosition)}px`}}>
                {Reel.map((symbol, index) => (
                  <div key={index} className="reel-item" style={{ ...symbolStyles }}>
                    <img alt={symbol.name} src={symbol.image} />
                    <Wumpa amount={symbol.wumpa} />
                  </div>
                ))}
            </div>
            <div className='reel reelTwo' style={{left: `${symbolSize + marginSize}px`, top: `${calcTop(reelTwoPosition)}px`}}>
                {Reel.map((symbol, index) => (              
                  <div key={index} className="reel-item" style={{ ...symbolStyles }}>
                    <img alt={symbol.name} src={symbol.image} />
                    <Wumpa amount={symbol.wumpa} />
                  </div>
                ))}
            </div>
            <div className='reel reelThree' style={{left: `${(symbolSize + marginSize) * 2}px`, top: `${calcTop(reelThreePosition)}px` }}>
                {Reel.map((symbol, index) => (
                  <div key={index} className="reel-item" style={{ ...symbolStyles }}>
                    <img alt={symbol.name} src={symbol.image} />
                    <Wumpa amount={symbol.wumpa} />
                  </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Reels;