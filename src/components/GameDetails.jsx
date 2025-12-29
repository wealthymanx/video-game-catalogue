import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Rating } from '@mui/material'

export default function GameDetails(){
   const { id } = useParams();
   const location = useLocation();
   const passedGameData = location.state?.gameData;

   const [gameData, setGameData] = useState(passedGameData || null);
   const [loading, setLoading] = useState(!passedGameData);
  

   useEffect(() => {
    if (passedGameData) {
      setGameData(passedGameData);
      setLoading(false);
    }
   }, [id, passedGameData]);

   useEffect(() => {
    const fetchGameDetails = async () => {
      const response = await fetch
      (`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      setGameData(data);
      setLoading(false);
    };
    
    fetchGameDetails();
   }, [id]
  );

    return (
         <div className="max-w-4xl mx-auto mt-8 rounded-lg border-4 border-yellow-600 overflow-hidden shadow-2xl">
    <img
      src={gameData.background_image}
      alt={gameData.name}
      className="w-full h-96 object-cover"
    />
    <div className="p-6 bg-gray-900">
       <h1 className="text-yellow-500 text-3xl font-bold">{gameData.name}</h1>
       <Rating name="half-rating" value={gameData.rating} precision={0.5} readOnly/>
          <p className="text-yellow-300 text-sm">Stores: {gameData.stores?.map(s => s.store.name).join(', ')}</p>
          <p className="text-yellow-300 text-sm">Genre: {gameData.genres?.map(genre => genre.name).join(', ')}</p> 
          <p className='text-yellow-300 text-sm'>Platforms: {gameData.platforms?.map(platform => platform.platform.name).join(', ')}</p>  
          <p className="text-yellow-300 text-sm">Playtime: {gameData.playtime} hours</p> 
          <p className="text-yellow-300 text-sm">{gameData.description_raw}</p>
    </div>
  </div>
)}