import "./PopUp.scss";

const PopUp = ({ setShowPopUp, handlePage4 }) => {
  return (
    <div className="popup">
      <div className="popup_container">
        <p className="popup_text">
          ¿Estás seguro que tus datos son correctos?
          <br />
          En el paso siguiente no se van a poder realizar modificaciones.
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
