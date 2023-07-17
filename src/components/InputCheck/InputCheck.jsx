import "./InputCheck.scss";

const InputCheck = ({ check, click }) => {
  return (
    <div className="inputCheck">
      <p className="inputCheck_p">¿Es residente de Uruguay?</p>
      <input type="checkbox" id="cbox1" checked={check} onChange={click} />
    </div>
  );
};

export default InputCheck;
