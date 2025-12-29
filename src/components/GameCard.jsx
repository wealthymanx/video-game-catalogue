import { format } from 'date-fns';
import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function GameCard({ gameData }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/game/${gameData.id}`, { state: { gameData } });
  }

    return (
       <div className=" flex flex-col flex-nowrap justify-center gap-1 rounded-lg border-[3px] border-yellow-600 shadow-lg cursor-pointer hover:bg-purple-900 mt-4" onClick={handleCardClick}>
        
         <div className="h-12 flex items-center justify-center">
            <h1 className="text-lg font-medium text-yellow-400">{gameData.name}</h1>
          </div>
         <div>
           <img className="!w-full !h-48 flex object-cover rounded-sm" src={gameData.background_image} alt={gameData.name}/>
         </div>
        <div className="flex flex-col text-left items-center">
            <Rating name="half-rating" value={gameData.rating} precision={0.5} readOnly/>
         <p className="text-yellow-300 text-left text-sm mb-1">Released: {format(gameData.released, 'PPP')} </p>
        </div>
       </div>
    )
}
