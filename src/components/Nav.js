import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div >
            <ul className='nav-ul'>
                <li><NavLink className='nav-bar-link' to='/about'>About</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/' >Home</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/filter'>Filter</NavLink></li>
                {/* <li><NavLink className='nav-bar-link' to='/' ><button>Click</button></NavLink></li> */}
                <li><NavLink className='nav-bar-link' to='/contact' >contact</NavLink></li>
            </ul>
        </div>  
    )
}
export default Navbar;