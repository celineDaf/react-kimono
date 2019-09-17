import React from 'react';
import './home.css';
import Menu from  './menu/menu'
import codePic from '../assets/code.png'

function Home() {
  return (
    <div className="Home">
      <div className="Home-header text-center Home-photo">
        <div className="home-title">
          <img src={codePic} className="home-title-image" />
          <div>Céline DAFFE</div>
        </div>
      </div>
      <div className="Home-menu">
      <Menu></Menu>
      </div>
    </div>
  );
}

export default Home;
