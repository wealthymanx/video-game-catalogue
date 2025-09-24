import React from 'react';
import GameContainer from './GameContainer';

const GameDisplay = ({ games }) => {
   return (
<div className="grid grid-cols-2 gap-4">
        {games?games.map(game => (
            <GameContainer key={game.id} gameData={game} />
        )) : "Loading your games!"}
</div>
)
};
export default GameDisplay