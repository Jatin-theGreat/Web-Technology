import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/add" style={styles.link}>Add Student</Link>
            <Link to="/list" style={styles.link}>Student List</Link>
        </nav>
    )
}

const styles = {
    nav : {
        backgroundColor : "#333",
        padding : "10px",
        display : "flex",
        justifyContent: "center",
        gap : "20px"
    },
    link : {
        color : "white",
        textDecoration : "none",
        fontWeight : "bold"
    }
}
export default Navbar;