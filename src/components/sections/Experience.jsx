import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  let work = null;
  let sectionName = "";

  if (resumeExperience && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.experience;
    work = resumeExperience.map((workItem, i) => {
      const { technologies, mainTech, years, title, company, description, responsibilities } =
        workItem;

      const mainTechElements = mainTech.map((technology, index) => (
        <Badge pill className="main-badge mr-2 mb-2" key={index}>
          {technology}
        </Badge>
      ));

      const techElements = technologies.map((technology, index) => (
        <Badge pill className="experience-badge mr-2 mb-2" key={index}>
          {technology}
        </Badge>
      ));
      const responsibilityElements = responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fas fa-briefcase experience-icon"></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTechElements}
          </div>

          <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
            {title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
            {company}
          </h4>
          <p className="vertical-timeline-element-subtitle" style={{ textAlign: "left", fontSize: "120%" }}>
            {description}
          </p>

          <ul className="vertical-timeline-element-subtitle" style={{ textAlign: "left", fontSize: "120%" }}>
            {responsibilityElements}
          </ul>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{techElements}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-12 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
