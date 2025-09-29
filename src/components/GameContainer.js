import { format } from 'date-fns';

export default function GameContainer({ gameData }) {
    return (
       <div className="bg-gray-800 flex gap-2 rounded-sm border border-black shadow-lg">
         <div className="px-0">
         <img className="!w-[281px] !h-[210.75px] object-cover rounded-sm" src={gameData.background_image} alt={gameData.name}/>
         </div>
         <div className="flex flex-col text-left">
         <h1 className="text-lg font-medium text-red-600">{gameData.name}</h1>
        {/* <p>Platform: {gameData.platforms?.map(platform => platform.platform.name).join(', ')}</p>  */}
         <p className="text-medium text-white">Rating: {gameData.rating}/5</p>
         <p className="text-white">Genre: {gameData.genres?.map(genre => genre.name).join(', ')}</p>
         <p className="text-white">Released: {format(gameData.released, 'PPP')} </p>
         {/* <p>Playtime: {gameData.playtime} hours</p> */}
       </div>
       </div>
    )
}
