import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  width: "100vw",
  height: "50px",
  backgroundColor: "cornflowerblue"
};

const navStyle = {
  display: "inline-block"
};

const liStyle = {
  display: "inline",
  marginRight: "1em",
  a: {
    color: "white"
  }
};

const aStyle = {
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    color: "yellow"
  }
};

const Component = () => (
  <header style={headerStyle}>
    <nav style={navStyle}>
      <ul>
        <li style={liStyle}>
          <Link to="/" style={aStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/css" style={aStyle}>
            CSS Renderer
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/webgl" style={aStyle}>
            WebGL Renderer
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Component;
