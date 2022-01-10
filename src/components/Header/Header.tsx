import React from "react";
import wave from "../../assets/waveLogo.png";
import football from "../../assets/fbPlayerHero.jpg";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <div className="waveContainer">
        <img src={wave} className="wavePic" alt="waveLogo" />
      </div>

      <div className="footballHero">
        <img src={football} className="footballPic" alt="footballPic" />
        <p className="topLeft">NFL</p>

        <div className="centered inputContainer">

          <div className="inputField">
            <input placeholder="Enter Location" />
          </div>
          <div className="location">
            <i className="fa fa-map-marker" style={{ color: "white" }}></i>
            <p>New York, New York</p>
          </div>

        </div>

        <div className="inputContainer2">
          <div className="inputField2">
            <input placeholder="Enter Location" />
            {/* <button type="submit">New York, New York </button> */}
          </div>
          {/* <div className="location2">
            <i className="fa fa-map-marker" style={{ color: "white" }}></i>
            <p>New York, New York</p>
          </div> */}
        </div>


      </div>


    </div>
  );
};

export default Header;
