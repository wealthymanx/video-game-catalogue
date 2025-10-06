import { format } from 'date-fns';
import StarRatings from './StarRatings';

export default function GameContainer({ gameData }) {
    return (
       <div className="bg-gray-800 flex flex-col gap-1 rounded-lg border border-yellow-400 shadow-lg pt-3 px-6 pb-12 hover:bg-sky-700 !w-[280px] mt-4">
         <div className="h-12 flex items-center justify-center">
          <h1 className="text-2xl font-medium text-red-500 pb-2">{gameData.name}</h1>
         </div>
         <div>
         <img className="!w-full !h-48 object-cover rounded-sm" src={gameData.background_image} alt={gameData.name}/>
         </div>
         <div className="flex flex-col text-left items-center">
        {/* <p>Platform: {gameData.platforms?.map(platform => platform.platform.name).join(', ')}</p>  */}
         
         {/* <p className="text-yellow-300">Genre: {gameData.genres?.map(genre => genre.name).join(', ')}</p> */} 
         <StarRatings rating={gameData.rating} />
         <p className="text-yellow-300 pb-6">Released: {format(gameData.released, 'PPP')} </p>
         {/* <p>Playtime: {gameData.playtime} hours</p> */}
       </div>
       </div>
    )
}
