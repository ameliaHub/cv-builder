function Buttons({ handleButtonClick }) {
  return (
    <div className="buttons-container">
      <button
        className="clean-btn"
        onClick={() => handleButtonClick("limpiar")}
      >
        Borrar CV
      </button>
      <button
        className="load-btn"
        onClick={() => handleButtonClick("cargarEjemplo")}
      >
        Cargar ejemplo
      </button>
    </div>
  );
}

export default Buttons;
