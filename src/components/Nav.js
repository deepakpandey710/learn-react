import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Nav=()=>{
    return(
        <div>
            <Link to='/' >Home</Link>
            <br/>
            <Link to='/about'>About</Link>
            <br/>
            <Link to='/contact' >contact</Link>
        </div>  
    )
}
export default Nav;