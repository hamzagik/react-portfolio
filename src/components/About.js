import React from "react";
import MyPic from "../Hamzaaa.jpeg"
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element className='about-section' style={{ backgroundColor: "whitesmoke" }}>
      <section id='about' className="container py-5-about-wrapper">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap">
              <img
                className="profile-img"
                src={MyPic}
                alt="Developer.." />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h2 className="text-uppercase about-heading">About Myself</h2>
            <p style={{color: "grey"}}>
            An aspiring Junior Year Computer Science student who's doing my bachelor's from Ghulam Ishaq Khan Institute, I am an enthusiastic individual with an unwavering passion for exploring the vast realms of technology. With an analytical
            mindset, and passion for data sciences, automation, and AI, I am poised to make significant contributions to the world of technology, pushing boundaries, and transforming the way we perceive and interact with the digital landscape.

            </p>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default About
