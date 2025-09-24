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
    console.log(query,"query")
    console.log(dropDown,"dropdown")
    
    const handleChange = (value) => {
        setQuery(value);
        setDropdown(true);
    }
    console.log(handleChange,"handle change")
    return (
        <div className="flex items-center rounded-lg">
            <input 
            type="search" 
            placeholder="Search games" 
            aria-label="Search"
            className="px-2 py-2 text-violet-600"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            />
            <FaSearch className= "w-6 h-6" />
           <div>
            {dropDown && <div>{firstGame}</div>}
                
        </div> 
        </div>
    )
}
export default SearchBar