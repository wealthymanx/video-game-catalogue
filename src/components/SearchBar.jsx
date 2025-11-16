import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa"

const SearchBar = ({ query, setQuery, games }) => {
    const [dropDown, setDropdown] = useState(false);
    //    console.log(games, "games")

       const filteredGames = games?.filter(game =>
        game.name.toLowerCase().startsWith(query.toLowerCase())
        
     );

    const firstGame = filteredGames?.[0]?.name
    const secondGame = filteredGames?.[1]?.name
    const thirdGame = filteredGames?.[2]?.name
    
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
            className="px-2 py-1.5 text-black rounded-lg border-4 border-black focus:outline-none focus:border-4 focus:border-black w-96"
            value={query}
            onChange={(e) => handleChange(e.target.value)}  
            />
           
           <div className="absolute top-full left-0 z-30 w-96">
            {dropDown && <div className="border rounded bg-white z-30 text-black w-full">
                <div className="px-2 py-2 hover:bg-gray-100">{firstGame}</div>
                <hr className="border-gray-200" />
               <div className="px-2 py-2 hover:bg-gray-100">{secondGame}</div>
               <hr className="border-gray-200" />
                 <div className="px-2 py-2 hover:bg-gray-100">{thirdGame}</div>
            </div>}
                
        </div> 
        </div>
    )
}
export default SearchBar