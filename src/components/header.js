import React from "react";

const wrapperStyle = {
  background: "rebeccapurple",
  marginBottom: "1em",
  padding: "1em .5em"
};

const headerStyle = {
  margin: 0,
  color: "white",
  textDecoration: "none",
  textAlign: "left"
};

const Header = ({ siteTitle }) => (
  <div style={wrapperStyle}>
    <h1 style={headerStyle}>{siteTitle}</h1>
  </div>
);

export default Header;
