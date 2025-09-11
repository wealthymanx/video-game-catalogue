export default function GameContainer({ gameData }) {
    return (
       <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
         <h2>{gameData.name}</h2>
         <p>Platform: {gameData.platforms?.map(p => p.platform.name).join(', ')}</p>
         <p>Released: {gameData.released}</p>
         <p>Genre: {gameData.genres?.map(g => g.name).join(', ')}</p>
         <p>Rating: {gameData.rating}</p>
         <p>Playtime: {gameData.playtime}</p>
         {gameData.background_image &&
         <img src={gameData.background_image} alt={gameData.name}/>
         }
       </div>
    )
}

