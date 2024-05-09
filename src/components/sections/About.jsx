import React from "react";

const AvatarPicture = ({ srcPath }) => {
  return (
    <div className="polaroid">
      <span style={{ cursor: "auto" }}>
        <img src={srcPath} alt="Avatar placeholder" />
      </span>
    </div>
  )
}

const IntroductionCard = ({ hello, description, philosophy, preference }) => {
  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
      </div>
      <div className="terminal-body">
        <span className="wave">{hello}</span>
        <p>{description}</p>
        <p>{philosophy}</p>
        <p>{preference}</p>
      </div>
    </div>
  );
}



const About = ({ sharedBasicInfo, resumeBasicInfo }) => {
  const profilepic = "/images/" + sharedBasicInfo.image;
  const sectionName = resumeBasicInfo.section_name.about;
  const hello = resumeBasicInfo.description_header;
  const description = resumeBasicInfo.description;
  const philosophy = resumeBasicInfo.philosophy;
  const preference = resumeBasicInfo.preference;

  return (
    <section id="about" className="header">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 center">
            <AvatarPicture srcPath={profilepic} />
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <IntroductionCard
                hello={hello}
                description={description}
                philosophy={philosophy}
                preference={preference} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
