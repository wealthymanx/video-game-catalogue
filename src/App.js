import React, { useEffect, useState } from 'react';
import GameDisplay from './components/GameDisplay';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
     const [games, setGames] = useState(null);
     const [error, setError] = useState(null);
     const [query, setQuery] = useState("");
     
  
  useEffect(() => {
      const fetchGames = async () => {
          try {
              const response = await fetch (`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=21`)
              if (!response.ok) {
                  throw new Error('Error');
              }
              const gameResults = await response.json();
              setGames(gameResults.results);
            //   console.log(gameResults)
          } catch (err) {
              setError(err.message);
          } 
      };
  
      fetchGames();
  }, []);
  return (
    <div>
     <Header />
     <div className="flex justify-center">
     <SearchBar query={query} setQuery={setQuery} games={games} />
     </div>
     <GameDisplay games={games} />
     </div>
  );
}

export default App;
