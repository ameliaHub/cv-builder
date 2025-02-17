import { useState } from "react";
import "./App.css";

import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import CvPreview from "./CVPreview";
import Buttons from "./Buttons";
import html2pdf from "html2pdf.js";

function App() {
  const initialGeneralInfo = {
    userName: "María Martínez",
    email: "maria@gmail-falso.com",
    phone: "700 700 700",
  };
  const initialEducation = [
    {
      school: "Universidad de Granada",
      degree: "Ingeniería informática",
      startDate: "20-09-21",
      endDate: "04-05-25",
      location: "Granada",
      isVisible: true,
    },
    {
      school: "Universidad Politécnica de Madrid",
      degree: "Máster en Ciencias de la Computación",
      startDate: "05-09-25",
      endDate: "05-06-27",
      location: "Madrid",
      isVisible: true,
    },
  ];
  const initialExperience = [
    {
      company: "Meta",
      position: "Ingeniero de datos",
      startDate: "17-11-22",
      endDate: "28-04-23",
      location: "Florida",
      description:
        "Encargado de gestionar los flujos de datos y optimizar el almacenamiento de información. Desarrollé procesos ETL escalables para apoyar a los equipos de inteligencia empresarial. Colaboré con científicos de datos para mejorar modelos predictivos utilizando grandes volúmenes de datos.",
      isVisible: true,
    },
    {
      company: "Google",
      position: "Ingeniero de Software",
      startDate: "10-06-23",
      endDate: "Presente",
      location: "California",
      description:
        "Desarrollo y mantenimiento de sistemas backend de alto rendimiento para servicios en la nube. Lidero un equipo en el desarrollo de herramientas de análisis basadas en inteligencia artificial. Implementación de arquitectura de microservicios para mejorar la escalabilidad y resiliencia del sistema.",
      isVisible: true,
    },
  ];

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);

  const handleButtonClick = (action) => {
    if (action === "limpiar") {
      setGeneralInfo({ userName: "", email: "", phone: "" });
      setEducation([]);
      setExperience([]);
    } else if (action === "cargarEjemplo") {
      setGeneralInfo(initialGeneralInfo);
      setEducation(initialEducation);
      setExperience(initialExperience);
    } else if (action === "imprimir") {
      const cv = document.querySelector(".cv-preview");
      const options = {
        margin: [0, 0, 0, 0], // Márgenes mínimos para aprovechar todo el espacio
        filename: "CV.pdf",
        image: { type: "jpeg", quality: 1 }, // Calidad máxima de imagen
        html2canvas: {
          scale: 1, // Captura a tamaño real, ignora el transform: scale del CSS
          useCORS: true, // Por si tienes imágenes externas
          logging: false, // Evita logs innecesarios en consola
          windowWidth: cv.scrollWidth, // Anchura real del elemento (evita la escala CSS)
          windowHeight: cv.scrollHeight, // Altura real del elemento
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait", // Modo vertical
        },
      };

      // Seleccionamos el elemento y generamos el PDF

      html2pdf().from(cv).set(options).save();

      /*
      const cv = document.querySelector(".cv-preview");
      html2pdf(cv);
      */
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
