import React from "react";

const Expertise = ({ resumeExpertise, resumeBasicInfo }) => {
  let sectionName = "";
  let expertise = null;

  if (resumeExpertise && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.expertise;
    expertise = resumeExpertise.icons.map((expertiseItem, i) => (
      <div className="col-md-6 text-center mx-auto" key={i}>
        <h3 className="pt-5">{expertiseItem.title}</h3>
        <p
          className="text-center"
          style={{
            fontSize: "140%",
            marginTop: "4px",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          {expertiseItem.description}
        </p>
      </div>
    ));
  }

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto" style={{ color: "white" }}>
            {expertise}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
