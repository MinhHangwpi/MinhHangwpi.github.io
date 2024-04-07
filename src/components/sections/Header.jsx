import React, { useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import GithubSVG from "../Icons/GithubSVG";
import GithubSVGDark from "../Icons/GithubSVGDark";

const Header = ({ sharedData }) => {
  const [checked, setChecked] = useState(false);

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  let name = "";
  let titles = [];
  let githubSocial;
  if (sharedData) {
    name = sharedData.name;
    titles = sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat();
    githubSocial = sharedData.social.find(obj => obj.name === 'github');
  }

  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className="title-styles" steps={titles} loop={50} />;
  }, () => true);

  return (
    <header id="home" style={{ height: window.innerHeight, display: 'block' }}>

      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        {checked ? (
          <GithubSVGDark githubUrl={githubSocial?.url || ''} />
        ) : (
          <GithubSVG githubUrl={githubSocial?.url || ''} />
        )}
      </div>

      <div className="row aligner" style={{ height: '100%' }}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
