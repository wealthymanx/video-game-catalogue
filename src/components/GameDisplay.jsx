import GameCard from './GameCard';
import { useState } from 'react';
import { sortGames, SortOptions } from '../utils';

const GameDisplay = ({ games }) => {
    const [sortBy, setSortBy] = useState('default');

    const sortedGames = sortGames(games, sortBy);
    
   return (
  <div>
    <div className="px-8 mb-4">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-4 py-2 text-yellow-600 bg-slate-950 rounded-lg border-4 border-yellow-600 focus:outline-none focus:border-yellow-600">
            <option value="default">Sort By</option>
            {SortOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>

    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5 w-full px-8 max-w-[2000px] pl-8">
        {games?sortedGames.map(game => (
            <GameCard key={game.id} gameData={game} />
        )) : "Loading games!"}
    </div>
    </div>
)
};
export default GameDisplay

