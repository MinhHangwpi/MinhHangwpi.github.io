import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = ({ resumeProjects, resumeBasicInfo }) => {
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [deps, setDeps] = useState({});

  const handleDetailsModalShow = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const handleDetailsModalClose = () => setDetailsModalShow(false);

  let projects = [];
  if (resumeProjects && resumeBasicInfo) {
    const sectionName = resumeBasicInfo.section_name.projects;
    projects = resumeProjects.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item">
          <div className="foto" onClick={() => handleDetailsModalShow(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
              />
              <span className="project-date">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{resumeBasicInfo.section_name.projects}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={handleDetailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
};

export default Projects;
