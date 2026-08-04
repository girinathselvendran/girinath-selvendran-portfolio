import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import ProfileImg from "../../assets/images/Girinath_Profile.jpeg";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={ProfileImg} alt="profile_pic" />
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                Hi, I'm <b>Girinath Selvendran</b>, a{" "}
                <b>Senior Full Stack Developer</b> with
                <b> 5+ years of experience</b> building scalable, secure, and
                high-performance web applications using{" "}
                <b>
                  React.js, Next.js, Node.js, Express.js, TypeScript,
                  PostgreSQL, MongoDB,
                </b>{" "}
                and <b>Azure</b>.
                <br />
                <br />I have experience developing enterprise applications
                across
                <b> Fintech</b>, <b>Digital Publishing</b>, <b>E-Commerce</b>,
                and
                <b> Logistics</b>. My expertise includes designing responsive
                user interfaces, building RESTful APIs, optimizing database
                performance, and integrating cloud services and AI-powered
                features into modern web applications.
                <br />
                <br />
                In my current role at <b>Integra Software</b>, I develop
                enterprise workflow management solutions with AI-driven
                automation, Azure cloud services, and scalable backend
                architectures that improve productivity and user experience.
                <br />
                <br />I enjoy solving complex problems, writing clean and
                maintainable code, optimizing application performance, and
                continuously learning new technologies to build innovative,
                real-world solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
