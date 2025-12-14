import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ query, setQuery, games }) => {
    const [dropDown, setDropdown] = useState(false);
    //    console.log(games, "games")
       const filteredGames = games?.filter(game =>
        game.name.toLowerCase().startsWith(query.toLowerCase())
  
     );

    const navigate = useNavigate();
     
    const handleDropClick = (game) => {
         navigate(`/game/${game.id}`);
    }

    const handleChange = (value) => {
        setDropdown(value.length > 0);
        setQuery(value);

    }
  
    return (
        <div className="relative">
            {/* <button className="p-2"> <FaSearch className= "w-6 h-6" /></button> */}
            <input 
            type="search" 
            placeholder="Search games" 
            aria-label="Search"
            className="px-2 py-1.5 text-yellow-600 rounded-lg border-4 border-yellow-600 focus:outline-none focus:border-4 focus:border-yellow-600 w-96"
            value={query}
            onChange={(e) => handleChange(e.target.value)}  
            />
           
         {dropDown && <div className="absolute top-full left-0 z-30 w-96 border rounded bg-gray-600 text-yellow-600">
            {filteredGames?.slice(0,3).map((game, index) => (
                <Fragment key={game.id}> <div className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 p-2" onClick={() => {handleDropClick(game)}}>
                    <img src={game.background_image} alt={game.name} className="w-12 h-12 object-cover rounded" />
                    {game.name}
                    </div>
                </Fragment>
            ))}
                   
        </div>}
        </div>
    )
}
export default SearchBar