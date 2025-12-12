import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />

          <VerticalTimeline lineColor="#1e1e2c">

            {/* Integra Software – 2024–Present */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="Dec 2024 – Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer – MERN
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Integra Software, Puducherry
              </h4>

              <p>
                <ul>
                  <li>Automated job-failure handling and workflow error re-triggers.</li>
                  <li>Built core WMS reports for Inflow, WIP, Queries & Dispatch.</li>
                  <li>Implemented alt-text validation for iAlt (AI-based module).</li>
                  <li>Integrated Azure Blob Storage and improved asset workflows.</li>
                  <li>Configured Jenkins pipelines for automated deployments.</li>
                </ul>

                <strong>Tech Stack:</strong> React, Node.js, PostgreSQL, Jenkins, Azure
              </p>
            </VerticalTimelineElement>

            {/* Paripoorna Software – 2021–2024 */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="Nov 2021 – Nov 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer – MERN
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Paripoorna Software, Bengaluru
              </h4>

              <p>
                <ul>
                  <li>Developed full-stack applications using React & Node.js.</li>
                  <li>Improved API and backend performance across projects.</li>
                  <li>Implemented SSR and reusable UI components.</li>
                  <li>Used AI tools to speed up development & reduce debugging.</li>
                  <li>Worked with clients on requirements and solution design.</li>
                </ul>

                <strong>Tech Stack:</strong> React, Node.js, MongoDB, MySQL, Git
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
