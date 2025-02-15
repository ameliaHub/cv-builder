import { useState } from "react";

function Experience({ experience, setExperience }) {
  //Manejador de cambios (handleChange): Cada vez que un usuario escribe algo en el campo, el handleChange se llama, y actualiza el estado local correspondiente:
  const handleChange = (e) => {
    const { name, value } = e.target;

    //Actualizar la información general en el componente padre
    //(para que se actualice el folio a la vez que escribes en el input)
    // Usamos una función de actualización para asegurarnos de que toma el valor más reciente
    setExperience((prevState) => ({
      ...prevState,
      [name]: value, // Solo actualizamos la propiedad que ha cambiado
    }));
  };

  //El value del campo: Cada campo de entrada (<input>) tiene un atributo value, que está vinculado al estado local:
  //Esto hace que el valor del campo de texto sea igual al valor de name (lo que el usuario escribió en el formulario).
  //Cuando el usuario escribe algo, el onChange ejecuta handleChange, que actualiza el estado de name y, a su vez, también actualiza el estado global en el componente padre con setGeneralInfo.
  return (
    <div className="form-section">
      <h2>Experiencia</h2>
      <label htmlFor="">
        Empresa
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Puesto
        <input
          type="text"
          name="position"
          value={experience.position}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Inicio
        <input
          type="text"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Finalización
        <input
          type="text"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Localización
        <input
          type="text"
          name="location"
          value={experience.location}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Descripción
        <input
          type="text"
          name="description"
          value={experience.description}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Experience;
