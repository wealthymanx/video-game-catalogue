import { format } from 'date-fns';

export default function GameContainer({ gameData }) {
    return (
       <div className="bg-gray-800 flex flex-col gap-2 rounded-sm border border-black shadow-lg">
         <div>
         <img className="!w-full !h-48 object-contain rounded-sm" src={gameData.background_image} alt={gameData.name}/>
         </div>
         <div className="flex flex-col text-left items-center">
         <h1 className="text-2xl font-medium text-red-600">{gameData.name}</h1>
        {/* <p>Platform: {gameData.platforms?.map(platform => platform.platform.name).join(', ')}</p>  */}
         <p className="text-medium text-yellow-300 text-xl">Rating: {gameData.rating}/5</p>
         <p className="text-yellow-300">Genre: {gameData.genres?.map(genre => genre.name).join(', ')}</p>
         <p className="text-yellow-300">Released: {format(gameData.released, 'PPP')} </p>
         {/* <p>Playtime: {gameData.playtime} hours</p> */}
       </div>
       </div>
    )
}
