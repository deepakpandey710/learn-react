import { Link, Outlet } from "react-router-dom";

function Contact(){
    return(
        <div>
            <h1>This is Contact page</h1>
            <Link to='channel'>Channel</Link>
            <Link to='other'>Other</Link>
            <Outlet/>
        </div>
    )
}
export default Contact;