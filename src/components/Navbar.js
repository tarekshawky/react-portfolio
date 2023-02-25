import './Navbar.css'
import { Link ,NavLink} from "react-router-dom";
function Navbar(){
    return(
         <div className="navbar">
            <Link to='/'>Navbar</Link>
            <div className='links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            </div>
        </div> 
       
    );
}
export default Navbar