import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
export default Navbar;

//to avoid page reload we use Link tag instead of <a> tag