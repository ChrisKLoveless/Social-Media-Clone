import React from "react";
import img from "../img/PixelTwitter.jpg"

function Header() {
  return (
    <React.Fragment>
      <nav class="nav-bar">
        <img id="logo" src={img} alt="logo"/>
        <a href="/"><p class="nav-item">Home</p></a>
        <a href="/"><p class="nav-item">News</p></a>
        <a href="/"><p class="nav-item">Account</p></a>
        <a href="/"><p class="nav-item">Tweet</p></a>
        <form id="search-form">
          <input class="search" type="text" placeholder="Search" />
          <input class="search" type="text" placeholder="Tweet" />
          <button type="submit">Search</button>
        </form>
      </nav>
    </React.Fragment>
  );
}

export default Header;