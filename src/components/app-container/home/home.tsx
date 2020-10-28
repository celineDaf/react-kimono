import React from "react";
import "./home.scss";
import Menu from "./menu/menu";
import codePic from "./../../../assets/icons/code.png";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="Home-header text-center Home-photo">
          <div className="home-title">
            <img
              src={codePic}
              className="home-title-image"
              alt="Selfie of me, smiling wearing sunglasses, in japan, in a middle of a temple's garden"
            />
            <div>Céline DAFFE</div>
          </div>
        </div>
        <div className="Home-menu">
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
};

export default Home;
