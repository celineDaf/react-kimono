import React, { Component } from 'react'
import './menu.scss'
import SubMenu from './sub-menu/sub-menu'

const Menu = () => {
        return (
            <div className="menu">
                <div className="menu-item right blue-bc">
                    <SubMenu title="Livres"></SubMenu>
                </div>
                <div className="menu-item left yellow-bc">
                    <SubMenu title="Kimono"></SubMenu>
                </div>
                <div className="menu-item right red-bc">
                    <SubMenu title="Japon"></SubMenu>
                </div>
                <div className="menu-item left violet-bc">
                <SubMenu title="Job"></SubMenu>
                </div>
            </div>
        );
}

export default Menu
