import React from "react";
import Container from "react-bootstrap/esm/Container";
import ScrollToTop from "react-scroll-to-top";

//
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ScrollToTop smooth style={{ background: "#065471", color: "white" }} />
    </footer>
  );
};

export default Footer;
