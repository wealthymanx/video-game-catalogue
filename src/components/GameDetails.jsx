import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function GameDetails(){
   const { id } = useParams();
   const location = useLocation();
   const passedGameData = location.state?.gameData;

   const [gameData, setGameData] = useState(passedGameData || null);
   const [loading, setLoading] = useState(!passedGameData);

    return (
         <div className="max-w-4xl mx-auto mt-8 rounded-lg border-4 border-yellow-600 overflow-hidden shadow-2xl">
    <img
      src={gameData.background_image}
      alt={gameData.name}
      className="w-full h-96 object-cover"
    />
    <div className="p-6 bg-gray-900">
      <h1 className="text-yellow-500 text-3xl font-bold">{gameData.name}</h1>
    </div>
  </div>
)}