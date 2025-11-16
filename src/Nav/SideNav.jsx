import { NavLink } from 'react-router-dom';
import { NavItems, navClasses, sortGames, SortOptions } from '../utils';


export default function SideNav({ sortBy, setSortBy }) {

    return (
    <nav className="flex flex-col bg-slate-950 border-r-black w-80 text-2xl">   
          {NavItems.map((item) => (
            <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => navClasses(isActive)}
             >
            {item.name}
            </NavLink>
        ))}
        <h3 className="text-yellow-400 text-center">Sort By:</h3>
        {SortOptions.map((option) => 
        <button
            key={option.name}
            onClick={() => setSortBy(option.value)}
            className="text-yellow-400"
            >
            {option.name}
            </button>
        )}
    </nav>
  
    )
}
