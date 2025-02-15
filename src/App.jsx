import { useState } from "react";
import "./App.css";

import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import CvPreview from "./CVPreview";
import Buttons from "./Buttons";

function App() {
  const initialGeneralInfo = {
    userName: "María Martínez",
    email: "maria@gmail.com",
    phone: "666 666 666",
  };
  const initialEducation = {
    school: "Universidad de Granada",
    degree: "Ingeniería informática",
    startDate: "20-09-21",
    endDate: "04-05-25",
    location: "Granada",
  };
  const initalExperience = {
    company: "Meta",
    position: "Data Engineer",
    startDate: "17-11-22",
    endDate: "28-04-23",
    location: "Florida",
    description: "Managing use of case from...",
  };

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initalExperience);

  const handleButtonClick = (action) => {
    if (action === "limpiar") {
      setGeneralInfo({ userName: "", email: "", phone: "" });
      setEducation({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      });
      setExperience({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      });
    } else if (action === "cargarEjemplo") {
      setGeneralInfo(initialGeneralInfo);
      setEducation(initialEducation);
      setExperience(initalExperience);
    }
  };

  return (
    <>
      <div className="form-and-preview">
        <div className="form">
          <Buttons handleButtonClick={handleButtonClick}></Buttons>
          <GeneralInfo
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          ></GeneralInfo>
          <Education
            education={education}
            setEducation={setEducation}
          ></Education>
          <Experience
            experience={experience}
            setExperience={setExperience}
          ></Experience>
        </div>

        <CvPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        ></CvPreview>
      </div>
    </>
  );
}

export default App;
