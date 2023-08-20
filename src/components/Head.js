import React from "react";
import cv from "../Resume.pdf";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Head = () => {
  return (
    <div className="head-wraper">
      <div className="main-info">
        <h1>Hello, I'm Hamza.</h1>
        <Typed
          className="typed-text"
          strings={[" Browser Automation", "Web Development", "Web Scraping"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="button-container">
          <Link to="about-contact" className="btn-main-offer">Contact Me</Link>
          <a href={cv} download className="btn-main-offer">Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default Head
