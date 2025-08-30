import GameContainer from './components/GameCard';
import './App.css';

function App() {
  const gameData = {
    title: "The Legend of Zelda: Breath of the Wild",
    platforms: ["Nintendo Switch"],
    releaseDate: "03/03/2017",
    genre: "Action-Adventure",
    rating: "9.7/10",
    playTime: "50 hours"
  };
  return (
    <div className="App">
     <GameContainer gameData={gameData} />
     </div>
  );
}

export default App;
