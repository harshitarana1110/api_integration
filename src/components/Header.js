import React from "react";
import "./Header.css";
import img from "./download.png";
function Header() {
  return (
    <header>
      <img src={img} alt="loading" />
      <div className="detail">
        <h3>Patricia Lebsack</h3>
        <p>Brand</p>
      </div>
    </header>
  );
}

export default Header;
