import { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  //Manejador de cambios (handleChange): Cada vez que un usuario escribe algo en el campo, el handleChange se llama, y actualiza el estado local correspondiente:
  const handleChange = (e) => {
    const { name, value } = e.target;
    //Actualizar la información general en el componente padre
    //(para que se actualice el folio a la vez que escribes en el input)
    // Usamos una función de actualización para asegurarnos de que toma el valor más reciente
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value, // Solo actualizamos la propiedad que ha cambiado
    }));
  };

  //El value del campo: Cada campo de entrada (<input>) tiene un atributo value, que está vinculado al estado local:
  //Esto hace que el valor del campo de texto sea igual al valor de name (lo que el usuario escribió en el formulario).
  //Cuando el usuario escribe algo, el onChange ejecuta handleChange, que actualiza el estado de name y, a su vez, también actualiza el estado global en el componente padre con setGeneralInfo.
  return (
    <div className="form-section">
      <h2>Información general</h2>
      <label htmlFor="">
        Nombre
        <input
          type="text"
          name="userName"
          value={generalInfo.userName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Email
        <input
          type="text"
          name="email"
          value={generalInfo.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Teléfono
        <input
          type="text"
          name="phone"
          value={generalInfo.phone}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default GeneralInfo;
