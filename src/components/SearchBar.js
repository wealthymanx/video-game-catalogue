import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa"

export default function SearchBar() {
    return (
        <div className="">
            <input 
            type="search" 
            placeholder="Search for games..." 
            aria-label="Search"
            />
            <FaSearch className="hover:bg-sky-700" />
        </div>
    )
}
