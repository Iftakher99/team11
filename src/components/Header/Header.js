import React from "react";
import logo from "../../logo192.png";

const Header = () => {
  const imgStyle = {
    height: "200px",
    marginBottom: "20px",
    marginTop: "10px",
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img style={imgStyle} src={logo} alt="" />
      </div>
      <nav className="pr-5 d-flex justify-content-center bg-light border-rounded">
        <a className="nav-link" href="/home">
          Home
        </a>
        <a className="nav-link" href="/generatedPlayer">
          Generated Player
        </a>
        <a className="nav-link" href="/contact">
          Contact us
        </a>
      </nav>
    </div>
  );
};

export default Header;
