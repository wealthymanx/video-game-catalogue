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

    const handleClear = () => {
        setDropdown('');
    }
    return (
        <div className="flex items-center relative">
            <input 
            type="search" 
            placeholder="Search games" 
            aria-label="Search"
            className="px-6 py-1 text-gray-700 rounded-lg border-4 border-black"
            value={query}
            onChange={(e) => handleChange(e.target.value)}  
            />
            <button className="p-2"> <FaSearch className= "w-6 h-6" /></button>
           <div className="absolute top-full left-0 mt-1">
            {dropDown && <div className="border rounded bg-white z-30 text-black">{firstGame}</div>}
                
        </div> 
        </div>
    )
}
export default SearchBar