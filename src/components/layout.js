import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import config from "../config";

import "./layout.css";

const Layout = ({ children }) => (
  <div>
    <Header siteTitle={config.siteMetadata.title} />
    <div style={{ padding: "5em" }}>{children}</div>
  </div>
);

export default Layout;
