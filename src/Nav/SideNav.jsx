import { NavLink } from 'react-router-dom';
import { NavItems, navClasses, } from '../utils';


export default function SideNav() {

    return (
    <nav className="flex flex-col bg-slate-950 border-r-4 border-yellow-600 w-80 text-2xl min-h-screen">   
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
