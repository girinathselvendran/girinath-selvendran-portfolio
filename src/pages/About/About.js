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
              <h1>About Me</h1>
              <p>
                Hi, I’m <b>Girinath Selvendran</b>, a Full Stack Developer with
                4+ years of experience specializing in the <b>MERN</b> and
                <b> MEAN</b> stacks. I build scalable, high-performance web
                applications with strong focus on clean architecture and
                optimized user experiences.
                <br /><br />
                I have delivered production-ready solutions across multiple
                domains, including <b>Fintech</b>, <b>E-Commerce</b>,
                <b> Logistics</b>, and <b>Digital Publishing</b>. Some of my key
                work includes developing a Fintech Loan Management Platform,
                an E-Commerce system with real-time inventory, a Depot
                Management System, and Publishing Workflow Management System
                with AI-based Alt-Text validation.
                <br /><br />
                I enjoy solving complex problems, improving performance, and
                delivering reliable applications with attention to detail and
                quality.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
