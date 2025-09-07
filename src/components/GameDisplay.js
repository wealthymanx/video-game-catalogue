import React, { useEffect, useState } from 'react';

const GameDisplay = () => {
    const [games, setGames] = useState(null);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchGames = async () => {
        try {
            const response = await fetch (`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`);
            if (!response.ok) {
                throw new Error('Error');
            }
            const gameResults = await response.json();
            setGames(gameResults.results);
            console.log(gameResults)
        } catch (err) {
            setError(err.message);
        } 
    };

    fetchGames();
}, []);
   return (
    <div>
        {games ? games[0].name: "Loading"}</div>

)
};
export default GameDisplay