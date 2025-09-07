export default function GameContainer({ gameData }) {
    return (
        <div>
         <h2>{gameData.name}</h2>
         <p>Platform: {gameData.platforms.join(', ')}</p>
         <p>Released: {gameData.releaseDate}</p>
         <p>Genre: {gameData.genre}</p>
         <p>Rating: {gameData.rating}</p>
         <p>Playtime: {gameData.playTime}</p>
         <p>Description: {gameData.description}</p>
        </div>
    )
}

