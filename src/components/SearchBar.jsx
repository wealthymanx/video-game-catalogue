import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa"

const SearchBar = ({ query, setQuery, games }) => {
    const [dropDown, setDropdown] = useState(false);
       console.log(games, "games")

       const filteredGames = games?.filter(game =>
        game.name.toLowerCase().startsWith(query.toLowerCase())
        
     );

    const firstGame = filteredGames?.[0]?.name
    const secondGame = filteredGames?.[1]?.name
    const thirdGame = filteredGames?.[2]?.name

    // console.log(filteredGames,"filtered")
    
    const handleChange = (value) => {
        // value.length > 0 ? setDropdown(true) : setDropdown(false);
        setDropdown(value.length > 0);
        setQuery(value);

    }

    return (
        <div className="flex items-center relative">
            <input 
            type="search" 
            placeholder="Search games" 
            aria-label="Search"
            className="px-3 py-1 text-black rounded-lg border-4 border-black focus:outline-none focus:border-4 focus:border-black w-80"
            value={query}
            onChange={(e) => handleChange(e.target.value)}  
            />
            <button className="p-2"> <FaSearch className= "w-6 h-6" /></button>
           <div className="mt-1">
            {dropDown && <div className="border rounded bg-white z-30 text-black">{firstGame}<br />
                {secondGame}<br />
                {thirdGame}<br />
            </div>}
                
        </div> 
        </div>
    )
}
export default SearchBar