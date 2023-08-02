import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import image from "../../assets/images/thang.png";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={image} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a student who graduated in December 2022.Majoring in
                Computer-Embedded Systems in University of Science Ho Chi Minh
                city.Passionate about web programming, I am also a willing
                learner.In the future, I would like to become a Web Developer
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
