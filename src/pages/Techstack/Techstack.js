import React from "react";
import { motion } from "framer-motion";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: [0.9, 1.05, 1] }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </motion.div>
        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-md-3"
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
