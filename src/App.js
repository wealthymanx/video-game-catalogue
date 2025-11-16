import React, { useEffect, useState } from 'react';
import GameDisplay from './Components/GameDisplay';
import Header from './Components/Header';
import SideNav from './Nav/SideNav';
import { sortGames } from './utils';

function App() {
     const [games, setGames] = useState(null);
     const [error, setError] = useState(null);
     const [query, setQuery] = useState("");
     const [sortBy, setSortBy] = useState(null);
     
  
  useEffect(() => {
      const fetchGames = async () => {
          try {
              const response = await fetch (`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=15`)
              if (!response.ok) {
                  throw new Error('Error');
              }
              const gameResults = await response.json();
              setGames(gameResults.results);
          } catch (err) {
              setError(err.message);
          } 
      };
  
      fetchGames();
  }, []);

  const sortedGames = sortGames(games, sortBy);

  return (
    <div>
     <Header query={query} setQuery={setQuery} games={games}/>
     <div className="flex">
     <SideNav sortBy={sortBy} setSortBy={setSortBy} />
     <GameDisplay games={sortedGames} />
     </div>
     </div>
  );
}

export default App;
