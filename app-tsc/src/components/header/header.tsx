import React, { Component } from 'react';
import './header.scss';


const Header = () => {
        return (
            <div>
                <header className="header">
                    <div className="header-buttons">
                        <button className="header-button blue">Books</button>
                        <button className="header-button yellow">Kimono</button>
                        <button className="header-button red">Japan</button>
                        <button className="header-button violet">Work</button>
                    </div>
                </header>
                
            </div>
        );
}

export default Header
