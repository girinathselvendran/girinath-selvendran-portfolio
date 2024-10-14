import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const ProjectList = [
  {
    id: 1,
    projectImgUrl:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/375111021/original/a4af5abd5720ec346625b134941c944604fd9143/fintech-website-payment-website-neo-bank-website.png",
    gitHubUrl: "",
    projectName: "Fintech website",
    description: "",
    skills: [
      "React JS",
      "Node JS",
      "TypeScript",
      "MongoDB",
      "MySQL",
      "Azure Functions",
      "Redis",
      "JWT",
    ],
  },
  {
    id: 2,
    projectImgUrl:
      "https://www.tigren.com/blog/wp-content/uploads/2023/04/Screenshot-823.png",
    gitHubUrl: "",
    projectName: "E-commerce website",
    description: "",
    skills: [
      "React JS",
      "Node JS",
      "MySQL",
      "Redis",
      "Bootstrap",
      "SendGrid",
      "Azure Queue Function",
    ],
  },
  {
    id: 3,
    projectImgUrl:
      "https://www.shutterstock.com/image-photo/business-team-container-cargo-shipping-600nw-1736738582.jpg",
    gitHubUrl: "",
    projectName: "Depot Management System",
    description: "",
    skills: ["Angular", "TypeScript", ".Net C#", "PostgreSQL", "IIS", "JWT"],
  },
  {
    id: 4,
    projectImgUrl:
      "https://walkingtree.tech/wp-content/uploads/2022/01/Visualization-that-is-unique-to-you.png",
    gitHubUrl: "",
    projectName: "Power BI Dashboard Visualization",
    description: "",
    skills: [
      "Power BI",
      "Talend ETL",
      "Snowflake",
      "My SQL",
      "Azure AD",
      "Task Scheduler",
    ],
  },
];
const PersonalProjectsList = [
  {
    id: 1,
    projectImgUrl:
      "https://www.shutterstock.com/image-photo/business-team-container-cargo-shipping-600nw-1736738582.jpg",
    gitHubUrl: "",
    projectName: "Depot Management System",
    description: "",
    skills: [],
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
          Developed and led multiple web and mobile applications across fintech,
          e-commerce, and logistics domains. Focused on building user-friendly
          interfaces, backend optimizations, and integrating third-party
          services to streamline business operations and enhance user
          experiences.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <h2>Company Projects</h2>
          <Spin>
            {ProjectList.map((project) => (
              <div className="col-md-4 margin-bottom-10" key={project.id}>
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
          </Spin>

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
