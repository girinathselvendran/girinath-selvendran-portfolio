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
          <VerticalTimeline>
            {/* Integra Software */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="Dec 2024 – Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Integra Software, Puducherry
              </h4>
              <ul>
                <li>
                  Develop enterprise Workflow Management System (WMS) using
                  React, Node.js, PostgreSQL, and Azure.
                </li>

                <li>
                  Built scalable REST APIs and optimized backend services for
                  high-performance enterprise applications.
                </li>

                <li>
                  Integrated AI-powered workflow automation and Alt-Text
                  validation to improve publishing efficiency.
                </li>

                <li>
                  Implemented Azure Blob Storage integration for secure document
                  and asset management.
                </li>

                <li>
                  Automated workflow error handling, job recovery, and
                  monitoring to improve system reliability.
                </li>

                <li>
                  Designed interactive dashboards and reports for Inflow, WIP,
                  Queries, Dispatch, and Production tracking.
                </li>

                <li>
                  Configured CI/CD pipelines using Jenkins and collaborated with
                  QA and DevOps teams for seamless deployments.
                </li>

                <li>
                  Participated in Agile ceremonies, code reviews, sprint
                  planning, and production support.
                </li>
              </ul>
              <strong>Tech Stack:</strong> React.js, Node.js, Express.js,
              TypeScript, PostgreSQL, Azure Functions, Azure Blob Storage,
              Jenkins, Git, REST API, AI Integration
            </VerticalTimelineElement>

            {/* Paripoorna Software */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="Nov 2021 – Nov 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Paripoorna Software, Bengaluru
              </h4>
              <ul>
                <li>
                  Developed scalable full-stack web applications using the MERN
                  stack for Fintech, Logistics, and E-Commerce domains.
                </li>

                <li>
                  Designed responsive user interfaces with React.js, Redux,
                  Material UI, and Bootstrap.
                </li>

                <li>
                  Built secure REST APIs with Node.js and Express.js using JWT
                  authentication and role-based authorization.
                </li>

                <li>
                  Optimized MongoDB and MySQL queries, improving API performance
                  and application responsiveness.
                </li>

                <li>
                  Implemented reusable UI components, state management, and
                  server-side rendering for better user experience.
                </li>

                <li>
                  Integrated third-party APIs, payment gateways, and cloud
                  services based on business requirements.
                </li>

                <li>
                  Collaborated with cross-functional teams, gathered client
                  requirements, and delivered production-ready features in Agile
                  sprints.
                </li>

                <li>
                  Used GitHub Copilot, ChatGPT, and AI-assisted development
                  tools to improve productivity and code quality.
                </li>
              </ul>
              <strong>Tech Stack:</strong> React.js, Next.js, Node.js,
              Express.js, MongoDB, MySQL, TypeScript, Redux Toolkit, REST API,
              Git, GitHub, Agile, AI Tools
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
