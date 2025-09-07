import GameContainer from './components/GameContainer';
import './App.css';
import GameDisplay from './components/GameDisplay';

function App() {
  const gameData = {
    name: "The Legend of Zelda: Breath of the Wild",
    platforms: ["Nintendo Switch"],
    releaseDate: "03/03/2017",
    genre: "Action-Adventure",
    rating: "9.7/10",
    playTime: "50 hours",
    description: "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed by Nintendo EPD for the Wii U and Nintendo Switch. Set near the end of the Zelda timeline, it follows Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying the world."
  };
  return (
    <div className="App">
     <GameContainer gameData={gameData} />
     <GameDisplay />
     </div>
  );
}

export default App;
