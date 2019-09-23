import React, { Component } from 'react';
import './header.scss';


const Header = () => {
        return (
            <div>
                <header className="header">
                <div className="header-admin-button">+</div>
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
