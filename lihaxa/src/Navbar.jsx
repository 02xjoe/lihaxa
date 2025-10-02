import react from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar" style={{backgroundColor: '#f8f9fa', padding: '10px'}}>
            <Link to="/" style={{marginRight: '15px', textDecoration: 'none', color: '#007bff'}}></Link>
            <Link to="/about" style={{marginRight: '15px', textDecoration: 'none', color: '#007bff'}}></Link>
            <Link to="/SignUp" style={{textDecoration: 'none', color: '#007bff'}}></Link>
        </nav>
    );    
}

export default Navbar;