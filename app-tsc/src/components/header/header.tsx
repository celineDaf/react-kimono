import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
        return (
            <div>
                <header className="header">
                <Link className="header-admin-button" to="/admin">+</Link>
                    <div className="header-buttons ">
                        <button className="header-button red-bc white-text">Books</button>
                        <button className="header-button red-bc white-text">Kimono</button>
                        <button className="header-button red-bc white-text">Japan</button>
                        <button className="header-button red-bc white-text">Job</button>
                    </div>
                   
                </header>
                
            </div>
        );
}

export default Header
