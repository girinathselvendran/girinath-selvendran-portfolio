import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
const ProjectList = [
  {
    id: 1,
    projectImgUrl:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",
    gitHubUrl: "",
    projectName: "AI-Powered Publishing Workflow Management System",
    description:
      "Enterprise workflow platform for digital publishing with AI-powered Alt-Text generation, automated task allocation, workflow monitoring, reporting, and Azure cloud integration.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Azure Functions",
      "Azure Blob Storage",
      "REST API",
      "Jenkins",
      "LLM",
      "AI",
    ],
  },

  {
    id: 2,
    projectImgUrl:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/375111021/original/a4af5abd5720ec346625b134941c944604fd9143/fintech-website-payment-website-neo-bank-website.png",
    gitHubUrl: "",
    projectName: "Fintech Loan Origination & Loan Management System",
    description:
      "Developed scalable fintech platform for customer onboarding, loan processing, repayment tracking, reporting, authentication, and financial analytics.",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "MySQL",
      "Azure Functions",
      "Redis",
      "JWT",
      "REST API",
      "Power BI",
    ],
  },

  {
    id: 3,
    projectImgUrl:
      "https://halothemes.net/cdn/shop/products/spark-home-2-pc_bdc9a3c6-1576-4b68-9d34-c4a698dd23a5.jpg?v=1762480414&width=1024",
    gitHubUrl: "",
    projectName: "E-Commerce Platform",
    description:
      "Built a responsive e-commerce platform with authentication, product catalog, shopping cart, inventory management, order tracking, email notifications, and payment integration.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Redis",
      "Bootstrap",
      "SendGrid",
      "Azure Queue",
      "JWT",
    ],
  },

  {
    id: 4,
    projectImgUrl:
      "https://www.shutterstock.com/image-photo/business-team-container-cargo-shipping-600nw-1736738582.jpg",
    gitHubUrl: "",
    projectName: "Depot Management System",
    description:
      "Enterprise logistics application for depot operations, container tracking, billing, reporting, user management, and workflow automation.",
    skills: [
      "Angular",
      "TypeScript",
      ".NET",
      "PostgreSQL",
      "JWT",
      "REST API",
      "IIS",
    ],
  },

  {
    id: 5,
    projectImgUrl:
      "https://walkingtree.tech/wp-content/uploads/2022/01/Visualization-that-is-unique-to-you.png",
    gitHubUrl: "",
    projectName: "Power BI Analytics Dashboard",
    description:
      "Designed executive dashboards with ETL pipelines, Snowflake integration, role-based security, and business KPI visualization.",
    skills: [
      "Power BI",
      "Talend ETL",
      "Snowflake",
      "MySQL",
      "Azure AD",
      "RLS",
      "Task Scheduler",
    ],
  },

  {
    id: 6,
    projectImgUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
    gitHubUrl: "",
    projectName: "AI Document Assistant",
    description:
      "Integrated Large Language Models to summarize documents, generate Alt-Text, answer user queries, and automate content validation using AI APIs.",
    skills: [
      "OpenAI API",
      "Azure OpenAI",
      "Node.js",
      "React.js",
      "TypeScript",
      "Prompt Engineering",
      "REST API",
      "AI",
      "LLM",
    ],
  },
];

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Designed and developed enterprise-grade web applications across
          Fintech, Digital Publishing, E-Commerce, Logistics, and AI domains.
          Experienced in building scalable full-stack solutions, cloud
          integrations, REST APIs, workflow automation, AI-powered features, and
          interactive analytics using React.js, Node.js, TypeScript, PostgreSQL,
          MongoDB, Azure, and modern DevOps practices.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <h2>Company Projects</h2>
          {ProjectList.map((project) => (
            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6 margin-bottom-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card rounded h-100">
                <div className="card-image">
                  <img src={project.projectImgUrl} alt={project.projectName} />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {project.skills.map((skill, index) => (
                    <span className="card-detail-badge" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">{project.projectName}</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/girinathselvendran"
                  >
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* <h2>Personal Projects</h2>
          <Spin>
            {PersonalProjectsList.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="card rounded">
                  <div className="card-image">
                    <img
                      src={project.projectImgUrl}
                      alt={project.projectName}
                    />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    {project.skills.map((skill, index) => (
                      <span className="card-detail-badge" key={index}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">{project.projectName}</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
