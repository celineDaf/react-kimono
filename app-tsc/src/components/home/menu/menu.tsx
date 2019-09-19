import React, { Component } from 'react'
import './menu.scss'

const Menu = () => {
        return (
            <div className="menu">
                <div className="menu-item right blue">
                    Livres
                </div>
                <div className="menu-item left yellow">
                    Kimono
                </div>
                <div className="menu-item right red">
                    Japan
                </div>
                <div className="menu-item left violet">
                    Job
                </div>
            </div>
        );
}

export default Menu
