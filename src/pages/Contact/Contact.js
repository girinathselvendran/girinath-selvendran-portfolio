import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: msg,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_USER_ID,
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent successfully");
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        toast.error("Failed to send email.");
      });
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <motion.div
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/girinathselvendran"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a
                          href="https://github.com/girinathselvendran"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a
                          href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL || "girinathselvendran@gmail.com"}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsEnvelope color="red" size={30} />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
