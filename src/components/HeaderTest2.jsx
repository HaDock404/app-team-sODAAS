import '../styles/header_test_2.css'
import Logo from './Logo.jsx'
import WorldIcon2 from './WorldIcon_test_2.jsx'
import { Link } from 'react-router-dom';
import Dropdown2 from './Dropdow_test_2.jsx';
import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';



function HeaderTest2() {

    const { language } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const about_us = {
        en: 'About Us',
        pl: 'O Nas'
    };
    const commitments = {
        en: 'Commitments',
        pl: 'Zobowiązania'
    };
    const products = {
        en: 'Products',
        pl: 'Produkty'
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header2">
            <Link to="/" className="logo2">
                <Logo />
            </Link>
            <button className="burger-menu2" onClick={toggleMenu}>
                &#9776;
            </button>
            <nav className={`nav-links2 ${menuOpen ? 'open2' : ''}`}>
                <Link className="underline-on-hover2" to="/app-team-sodaas/About_us">{about_us[language]}</Link>
                <Link className="underline-on-hover2" to="/commitments">{commitments[language]}</Link>
                <Link className="underline-on-hover2" to="/products">{products[language]}</Link>
                <div className='lang-menu2'>
                    <WorldIcon2 />
                    <Dropdown2 />
                </div>   
            </nav>
        </header>
    );
  }
  
  export default HeaderTest2;