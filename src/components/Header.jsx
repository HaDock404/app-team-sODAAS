import '../styles/header.css'
import Logo from './Logo.jsx'
import WorldIcon from './WorldIcon.jsx'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdow.jsx';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <Logo />
            </Link>
            <nav class="nav-links">
                <Link className="underline-on-hover" to="/about">About Us</Link>
                <Link className="underline-on-hover" to="/commitments">Commitments</Link>
                <Link className="underline-on-hover" to="/products">Products</Link>
                <Dropdown />
            </nav>
        </header>
    );
  }
  
  export default Header;