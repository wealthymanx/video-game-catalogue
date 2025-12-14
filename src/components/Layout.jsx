import Header from './Header';
import SideNav from "../Nav/SideNav";
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { sortGames } from '../utils'

export default function Layout() {
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState(null)
    const [games, setGames] = useState(null);
    const [error, setError] = useState(null);

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
             <div className="flex min-h-screen">
                <SideNav sortBy={sortBy} setSortBy={setSortBy} />
                <Outlet context={{ games: sortedGames }} />
             </div>
        </div>
    )
}