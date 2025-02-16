import { useState } from "react";

function Experience({ experience, setExperience }) {
  //Manejador de cambios (handleChange): Cada vez que un usuario escribe algo en el campo, el handleChange se llama, y actualiza el estado local correspondiente:
  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );

    setExperience(updatedExperience);
  };

  const handleAddOnClick = () => {
    const newExperience = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };

    const newUpdatedExperience = [...experience, newExperience];
    setExperience(newUpdatedExperience);
  };

  //El value del campo: Cada campo de entrada (<input>) tiene un atributo value, que está vinculado al estado local:
  //Esto hace que el valor del campo de texto sea igual al valor de name (lo que el usuario escribió en el formulario).
  //Cuando el usuario escribe algo, el onChange ejecuta handleChange, que actualiza el estado de name y, a su vez, también actualiza el estado global en el componente padre con setGeneralInfo.
  return (
    <div className="form-section">
      <h2>Experiencia</h2>

      {experience.map((exp, index) => (
        <div key={index}>
          <label htmlFor="">
            Empresa
            <input
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label htmlFor="">
            Puesto
            <input
              type="text"
              name="position"
              value={exp.position}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label htmlFor="">
            Inicio
            <input
              type="text"
              name="startDate"
              value={exp.startDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label htmlFor="">
            Finalización
            <input
              type="text"
              name="endDate"
              value={exp.endDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label htmlFor="">
            Localización
            <input
              type="text"
              name="location"
              value={exp.location}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label htmlFor="">
            Descripción
            <input
              type="text"
              name="description"
              value={exp.description}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
        </div>
      ))}

      <button onClick={() => handleAddOnClick()}>Añadir</button>
    </div>
  );
}

export default Experience;
