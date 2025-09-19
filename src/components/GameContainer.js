import { format } from 'date-fns';

export default function GameContainer({ gameData }) {
    return (
       <div className="bg-slate-600 flex gap-2">
         <div className="px-0">
         <img className="!w-[281px]" src={gameData.background_image} alt={gameData.name}/>
         </div>
         <div className="flex flex-col text-left">
         <h1 className="font-medium">{gameData.name}</h1>
        {/* <p>Platform: {gameData.platforms?.map(platform => platform.platform.name).join(', ')}</p>  */}
         <p>Rating: {gameData.rating}/5</p>
         <p>Genre: {gameData.genres?.map(genre => genre.name).join(', ')}</p>
         <p>Released: {format(gameData.released, 'PPP')} </p>
         {/* <p>Playtime: {gameData.playtime} hours</p> */}
       </div>
       </div>
    )
}
