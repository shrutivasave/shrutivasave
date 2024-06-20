import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    /*edit to close header on mobile*/
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <header>
            <div className="nav-container">
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
                <nav className={isOpen ? "open" : ""}>
                    <ul>
                        <li><Link to="/" onClick={closeMenu}>home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>about me</Link></li>
                        <li><Link to="/work-experience" onClick={closeMenu}>work experience</Link></li>
                        <li><Link to="/projects" onClick={closeMenu}>projects</Link></li>
                        <li><Link to="/skills" onClick={closeMenu}>skills</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
