// Buttons.js
import React, { useState, useEffect } from 'react';
import './Ladder.scss';

const Ladder = ({ wumpas }) => {
    // State to store the player's position
    const [playerPosition, setPlayerPosition] = useState(0);

    // Update the player's position when wumpas changes
    useEffect(() => {
        // Calculate the new position by adding wumpas to the current position
        const newPosition = playerPosition + wumpas;
        if (newPosition > 13) {
            setPlayerPosition(0);
        } else {
            setPlayerPosition(newPosition);
        }
        
    }, [wumpas]);

    // Create an array to represent the squares on the ladder
    const squares = Array.from({ length: 14 }, (_, index) => {
        // Determine if the player is on this square
        const isPlayerHere = index === playerPosition;
        // Determine if the square has been visited
        const isVisited = index <= playerPosition;
        return (
            <div key={index} className={`square${isPlayerHere ? ' player' : ''}${isVisited ? ' visited' : ''}`}>
            </div>
        );
    });

    return <div className='ladder'>{squares}</div>;
}

export default Ladder;
