import "./InputCheck.scss";

const InputCheck = ({ check, click }) => {
  return (
    <div className="inputCheck">
      <p>¿Es residente Uruguayo?</p>
      <input
        type="checkbox"
        id="cbox1"
        value="first_checkbox"
        checked={check}
        onChange={click}
      />
    </div>
  );
};

export default InputCheck;
