import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa"

const SearchBar = ({ query, setQuery, games }) => {
    const [dropDown, setDropdown] = useState(false);
       console.log(games, "games")

       const filteredGames = games?.filter(game =>
        game.name.includes(query)
        
     );

    const firstGame = filteredGames?.[0]?.name

    console.log(filteredGames,"filtered")
    
    const handleChange = (value) => {
        setQuery(value);
        setDropdown(true);
    }
    console.log(handleChange,"handle change")
    return (
        <div className="flex items-center">
            <input 
            type="search" 
            placeholder="Search games" 
            aria-label="Search"
            className="px-4 py-1 text-gray-700 rounded-sm"
            value={query}
            onChange={(e) => handleChange(e.target.value)}  
            />
            <button className="p-2"> <FaSearch className= "w-6 h-6" /></button>
           <div>
            {dropDown && <div className="z-30 text-white">{firstGame}</div>}
                
        </div> 
        </div>
    )
}
export default SearchBar