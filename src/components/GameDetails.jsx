import { Link } from 'react-router-dom';

export default function GameDetails( {gameData} ){
    const handleClick = (event) => {

    }
    return (
        <div>
            {gameData.description}
        </div>
    )
}