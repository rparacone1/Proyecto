import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link} from 'react-router-dom'

import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
    <nav className='NavBar'>
        <link to='/'>
            <h3>Ecommerce</h3>
        </link>
        <div className='Categories'>
            <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
            <NavLink to={`category/tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>  
            <NavLink to={`category/notebook`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
        </div>
        < CartWidget />
    </nav>
    ) 
}

export default NavBar;
