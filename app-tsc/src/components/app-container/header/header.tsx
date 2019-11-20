import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

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
            <Link className="header-icon-books" to="/articles/books"></Link>
          </button>
          <button className="header-button red-bc white-text">
            <Link className="header-icon-kimono" to="/articles/kimono"></Link>
          </button>
          <button className="header-button red-bc white-text">
            <Link className="header-icon-japan" to="/articles/japan"></Link>
          </button>
          <button className="header-button red-bc white-text">
            <Link className="header-icon-job" to="/articles/job"></Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
