// Reels.js
import React from 'react';
import './Reels.scss';



const Reels = ({ onSpin, reelOnePosition, reelTwoPosition, reelThreePosition, Reel }) => {
  const circleSize = 130;
  const marginSize = 10;
 
  const calcTop = (pos) => {
    const newPos = pos * (circleSize + marginSize) - ((pos * (circleSize + marginSize)) * 2);
    return newPos
  }

  const windowStyles = {
    width: `${(circleSize * 3 ) + (marginSize * 4)}px`,
    height: `${circleSize + (marginSize * 2)}px`,
  };

  const circleStyles = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    margin: `${marginSize}px`,
  };  

  return (
    <div className="reels">
        <div className="window" style={{ ...windowStyles }}>
            <div className='reel reelOne' style={{top: `${calcTop(reelOnePosition)}px`}}>
                {Reel.map((symbol, index) => (
                  <div key={index} className="reel-item" style={{ ...circleStyles }}>
                    <img alt={symbol.name} src={symbol.image} />
                    <p>{symbol.wumpa}</p>
                  </div>
                ))}
            </div>
            <div className='reel reelTwo' style={{left: `${circleSize + marginSize}px`, top: `${calcTop(reelTwoPosition)}px`}}>
                {Reel.map((symbol, index) => (              
                  <div key={index} className="reel-item" style={{ ...circleStyles }}>
                    <img alt={symbol.name} src={symbol.image} />
                    <p>{symbol.wumpa}</p>
                  </div>
                ))}
            </div>
            <div className='reel reelThree' style={{left: `${(circleSize + marginSize) * 2}px`, top: `${calcTop(reelThreePosition)}px` }}>
                {Reel.map((symbol, index) => (
                  <div key={index} className="reel-item" style={{ ...circleStyles }}>
                    <img alt={symbol.name} src={symbol.image} />
                    <p>{symbol.wumpa}</p>
                  </div>
                ))}
            </div>
        </div>
        {reelOnePosition},
        {reelTwoPosition},
        {reelThreePosition}
    </div>
  );
};

export default Reels;