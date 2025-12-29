import GameDisplay from './Components/GameDisplay';
import { useOutletContext } from 'react-router-dom';

function App() {
  const { games } = useOutletContext(); 
  return (
    <div>  
     <GameDisplay games={games} />
     </div>   
  );
}
export default App;
