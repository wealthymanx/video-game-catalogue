import { NavLink } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { NavItems, navClasses } from '../utils';

export default function SideNav() {

    return (
    <nav className="w-80 h-screen fixed top-0 left-0 bg-slate-950 border-r-black">
        <h1 className="p-6 text-2xl text-yellow-500 font-bold text-center border border-solid ">Marcel's Game Library</h1>
          {NavItems.map((item) => (
            <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => navClasses(isActive)}
             >
            {item.name}
            </NavLink>
        ))}
    </nav>
  
    )
}