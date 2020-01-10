import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { CategoriesEnum } from '../../../domain/category-types'

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-admin-buttons-left">
          <Link className="header-icon-home" to="/home"></Link>
        </div>

        <div className="header-admin-buttons">
          <div className="admin-button">
            <Link className="header-icon-list" to="/admin"></Link>
          </div>
          <div className="admin-button">
            <Link to="/admin/add-article">+</Link>
          </div>
        </div>

        <div className="header-buttons ">
          <button className="header-button red-bc white-text">
            <Link className="header-icon-books"  to={`/articles/${CategoriesEnum.BOOKS}`}></Link>
          </button>
          <button className="header-button red-bc white-text">
            <Link className="header-icon-kimono" to={`/articles/${CategoriesEnum.KIMONO}`}></Link>
          </button>
          <button className="header-button red-bc white-text">
            <Link className="header-icon-japan" to={`/articles/${CategoriesEnum.JAPAN}`}> </Link>
          </button>
          <button className="header-button red-bc white-text">
            <Link className="header-icon-job" to={`/articles/${CategoriesEnum.JOB}`}></Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
