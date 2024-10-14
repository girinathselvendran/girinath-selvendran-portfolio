import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import ProfileImg from "../../assets/images/profile_image.jpeg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={ProfileImg} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi, I’m <b>Girinath Selvendran</b>, a highly skilled Full Stack
                Developer with over 3 years of experience specializing in
                <b> MERN and MEAN stacks</b>. I excel in building efficient,
                user-friendly web applications using React JS, Angular, and
                Node.js. With a strong focus on backend optimization and
                frontend performance, I have successfully led teams and
                delivered projects across various industries, including fintech
                and e-commerce. I’m passionate about solving complex problems
                and consistently improving my skills to deliver high-quality
                software solutions.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
