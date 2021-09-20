import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/">
            <img className="logo" src="Okidoki.png" alt="Logo"/>    
            </Link>
            <Link to="/cart">
            <img className="cart" src="cart.svg" alt="Cart"/>  
            </Link>  
        </div>
    );
}

export default Navbar;