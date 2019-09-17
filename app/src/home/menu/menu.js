import React, { Component } from 'react'
import './menu.css'
import '../../App.css';

export class Menu extends Component {
    render() {
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
        )
    }
}

export default Menu
