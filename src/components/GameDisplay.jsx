import React from 'react';
import GameCard from './GameCard';

const GameDisplay = ({ games }) => {
   return (
    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5 w-full px-8 ml-80 max-w-[2000px] pl-8">
        {games?games.map(game => (
            <GameCard key={game.id} gameData={game} />
        )) : "Loading your games!"}
    </div>
)
};
export default GameDisplay

