import "./PopUp.scss";

const PopUp = ({ setShowPopUp, handlePage4 }) => {
  return (
    <div className="popup">
      <div className="popup_container">
        <p className="popup_text">
          ¿Estás seguro que tus datos son correctos?
          <br />A partir del siguiente paso no se van a poder hacer
          modificaciones
        </p>
        <div className="popup_buttonContainer">
          <button
            className="popup_button popup_si"
            onClick={() => handlePage4()}
          >
            Si
          </button>
          <button className="popup_button" onClick={() => setShowPopUp(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
