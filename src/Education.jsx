import { useState } from "react";


function Education({ education, setEducation }) {
  //Manejador de cambios (handleChange): Cada vez que un usuario escribe algo en el campo, el handleChange se llama, y actualiza el estado local correspondiente:
  const handleChange = (e, index) => {
    const { name, value } = e.target;

    //Al ser un array, debemos actualizar solo el objeto con el indice correspondiente
    const updatedEducation = education.map((educ, i) =>
      i === index ? { ...educ, [name]: value } : educ
    );

    setEducation(updatedEducation);
  };

  const handleAddOnClick = () => {
    const newEducation = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      isVisible: true, // Añadimos un estado de visibilidad
    };

    const newUpdatedEducation = [...education, newEducation];
    setEducation(newUpdatedEducation);
  };

  const handleViewOnClick = (index) => {
    const updatedEducation = education.map((educ, i) =>
      i === index ? { ...educ, isVisible: !educ.isVisible } : educ
    );
    setEducation(updatedEducation);
  };

  //El value del campo: Cada campo de entrada (<input>) tiene un atributo value, que está vinculado al estado local:
  //Esto hace que el valor del campo de texto sea igual al valor de name (lo que el usuario escribió en el formulario).
  //Cuando el usuario escribe algo, el onChange ejecuta handleChange, que actualiza el estado de name y, a su vez, también actualiza el estado global en el componente padre con setGeneralInfo.
  return (
    <div className="form-section">
      <h2>Educación</h2>

      {education.map((educ, index) => (
        <div key={index}>
          <button
            className="view-btn"
            data-view="open"
            onClick={(e) => handleViewOnClick(index)}
          >
            {educ.isVisible ? "Ocultar" : "Ver"}
          </button>
          {/* Solo mostramos el formulario si isVisible es true */}
          {educ.isVisible ? (
            <>
              <label htmlFor="">
                Universidad
                <input
                  type="text"
                  name="school"
                  value={educ.school}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <label htmlFor="">
                Grado
                <input
                  type="text"
                  name="degree"
                  value={educ.degree}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <label htmlFor="">
                Inicio
                <input
                  type="text"
                  name="startDate"
                  value={educ.startDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <label htmlFor="">
                Finalización
                <input
                  type="text"
                  name="endDate"
                  value={educ.endDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <label htmlFor="">
                Localización
                <input
                  type="text"
                  name="location"
                  value={educ.location}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
            </>
          ) : (
            // Si no está visible, solo mostrar una franja blanca o algo representativo
            <div className="collapsed-view">
              <p>{educ.school}</p>
            </div>
          )}
        </div>
      ))}
      <button onClick={() => handleAddOnClick(setEducation, education)}>
        Añadir
      </button>
    </div>
  );
}

export default Education;
