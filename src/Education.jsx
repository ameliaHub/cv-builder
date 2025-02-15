import { useState } from "react";

function Education({ education, setEducation }) {
  //Manejador de cambios (handleChange): Cada vez que un usuario escribe algo en el campo, el handleChange se llama, y actualiza el estado local correspondiente:
  const handleChange = (e) => {
    const { name, value } = e.target;

    //Actualizar la información general en el componente padre
    //(para que se actualice el folio a la vez que escribes en el input)
    // Usamos una función de actualización para asegurarnos de que toma el valor más reciente
    setEducation((prevState) => ({
      ...prevState,
      [name]: value, // Solo actualizamos la propiedad que ha cambiado
    }));
  };

  //El value del campo: Cada campo de entrada (<input>) tiene un atributo value, que está vinculado al estado local:
  //Esto hace que el valor del campo de texto sea igual al valor de name (lo que el usuario escribió en el formulario).
  //Cuando el usuario escribe algo, el onChange ejecuta handleChange, que actualiza el estado de name y, a su vez, también actualiza el estado global en el componente padre con setGeneralInfo.
  return (
    <div className="form-section">
      <h2>Educación</h2>

      {education.map((educ, index) => (
        <div key={index}>
          <label htmlFor="">
            Universidad
            <input
              type="text"
              name="school"
              value={educ.school}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Grado
            <input
              type="text"
              name="degree"
              value={educ.degree}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Inicio
            <input
              type="text"
              name="startDate"
              value={educ.startDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Finalización
            <input
              type="text"
              name="endDate"
              value={educ.endDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Localización
            <input
              type="text"
              name="location"
              value={educ.location}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Education;
