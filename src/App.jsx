import React, { useState, useEffect, useContext } from 'react';
import './App.scss';
import sharedDataJson from './data/portfolio_shared_data.json' assert { type: 'json' };
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Expertise from "./components/sections/Expertise";
import { LocalizationContext } from './localization/provider';
import LanguageToggler from './components/sections/LanguageToggler';

const App = () => {

    const { localizationStore: [state] } = useContext(LocalizationContext);

    return (
        <div>
            <Header sharedData={sharedDataJson.basic_info} />
            <div className="col-md-12 mx-auto text-center language">
                <LanguageToggler />
            </div>
            <About
                resumeBasicInfo={state.json.basic_info}
                sharedBasicInfo={sharedDataJson.basic_info}
            />
            <Projects
                resumeProjects={state.json.projects}
                resumeBasicInfo={state.json.basic_info}
            />
            <Skills
                sharedSkills={sharedDataJson.skills}
                resumeBasicInfo={state.json.basic_info}
            />
            <Experience
                resumeExperience={state.json.experience}
                resumeBasicInfo={state.json.basic_info}
            />
            <Expertise
                resumeExpertise={state.json.expertise}
                resumeBasicInfo={state.json.basic_info}
            />
            <Education
                resumeEducation={state.json.education}
                resumeBasicInfo={state.json.basic_info}
            />
            <Footer sharedBasicInfo={sharedDataJson.basic_info} />
        </div >
    )
}

export default App;