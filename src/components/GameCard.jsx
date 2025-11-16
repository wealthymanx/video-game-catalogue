import { format } from 'date-fns';
import { Rating } from '@mui/material'

export default function GameCard({ gameData }) {
    return (
       <div className=" flex flex-col flex-nowrap justify-center gap-1 rounded-lg border-[3px] border-yellow-600 shadow-lg  hover:bg-violet-800 mt-4">
         <div className="h-12 flex items-center justify-center">
            <h1 className="text-lg font-medium text-yellow-400">{gameData.name}</h1>
          </div>
         <div>
           <img className="!w-full !h-48 flex object-cover rounded-sm" src={gameData.background_image} alt={gameData.name}/>
         </div>
        <div className="flex flex-col text-left items-center">
            <Rating name="half-rating" value={gameData.rating} precision={0.5} readOnly/>
         <p className="text-yellow-300 text-left text-sm mb-1">Released: {format(gameData.released, 'PPP')} </p>
         
        {/* <p>Platform: {gameData.platforms?.map(platform => platform.platform.name).join(', ')}</p>  */}  
         {/* <p className="text-yellow-300">Genre: {gameData.genres?.map(genre => genre.name).join(', ')}</p> */} 
         
         {/* <p>Playtime: {gameData.playtime} hours</p> */}
        </div>
       </div>
    )
}
