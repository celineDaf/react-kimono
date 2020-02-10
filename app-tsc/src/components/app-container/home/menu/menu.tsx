import React from 'react'
import './menu.scss'
import SubMenu from './sub-menu/sub-menu'
import {CategoriesEnum } from '../../../../domain/category-types'

const Menu = () => {

    const categories = CategoriesEnum;
        return (
            <div className="menu">
                <div className="menu-item ">
                    <SubMenu title="Livres" category={categories.BOOKS} titleSide={'left'} colorBgClass={'blue-bc'}></SubMenu>
                </div>
                <div className="menu-item ">
                    <SubMenu title="Kimono" category={categories.KIMONO} titleSide={'right'} colorBgClass={'yellow-bc left'}></SubMenu>
                </div>
                <div className="menu-item ">
                    <SubMenu title="Japon" category={categories.JAPAN} titleSide={'left'} colorBgClass={'red-bc'}></SubMenu>
                </div>
                <div className="menu-item ">
                    <SubMenu title="Job" category={categories.JOB} titleSide={'right'} colorBgClass={'violet-bc  left'}></SubMenu>
                </div>
            </div>
        );
}

export default Menu
