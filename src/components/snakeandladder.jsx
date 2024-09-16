import React, { useState } from 'react';

const snakesAndLadders = {
   17: 7,   // Snake
   54: 34,  // Snake
   62: 19,  // Snake
   87: 36,  // Snake
   4: 14,   // Ladder
   9: 31,   // Ladder
   20: 38,  // Ladder
   28: 84   // Ladder
};

const SnakeAndLadder = () => {
   const [playerPosition, setPlayerPosition] = useState(1);
   const [diceRoll, setDiceRoll] = useState(1);

   const rollDice = () => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setDiceRoll(roll);
      let newPos = playerPosition + roll;

      // If landed on snake or ladder, update the position
      if (snakesAndLadders[newPos]) {
         newPos = snakesAndLadders[newPos];
      }

      // Ensure the position does not exceed 100
      setPlayerPosition(newPos > 100 ? playerPosition : newPos);
   };

   return (
      <div>
         {/* <h1>Snake and Ladder Game</h1> */}
         <p>Current Position: {playerPosition}</p>
         <p>Dice Rolled: {diceRoll}</p>
         <button onClick={rollDice}>Roll Dice</button>
      </div>
   );
};

export default SnakeAndLadder;
