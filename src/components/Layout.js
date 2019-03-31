import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const divStyle = {
  position: "relative",
  padding: "1em"
};

const Component = props => (
  <React.Fragment>
    <Header />
    <div style={divStyle}>
      {props.children}
      <Footer />
    </div>
  </React.Fragment>
);

export default Component;
