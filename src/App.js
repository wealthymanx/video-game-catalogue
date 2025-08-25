
import './App.css';

function App() {
  const gameData = {
    title: "The Legend of Zelda: Breath of the Wild",
    platforms: ["Nintendo Switch"],
    releaseDate: "03/03/2017",
    genre: "Action-Adventure",
  };
  return (
    <div className="App">
     <h1>Video Game Catalogue</h1>
     <div>
      <h2>{gameData.title}</h2>
      <p>Platform: {gameData.platforms.join(', ')}</p>
      <p> Released: {gameData.releaseDate}</p>
      <p>Genre: {gameData.genre}</p>
     </div>
     </div>
  );
}

export default App;
