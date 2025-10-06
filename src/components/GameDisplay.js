import React from 'react';
import GameContainer from './GameContainer';

const GameDisplay = ({ games }) => {
   return (
<div className="grid grid-cols-6 gap-5 w-full bg-slate-600 px-8">
        {games?games.map(game => (
            <GameContainer key={game.id} gameData={game} />
        )) : "Loading your games!"}
</div>
)
};
export default GameDisplay
