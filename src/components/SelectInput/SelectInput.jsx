import "./SelectInput.scss";

const SelectInput = ({ placeholder, click }) => {
  return (
    <select name="select" className="selectInput" onClick={click}>
      {placeholder && (
        <option value="placeholder" hidden selected>
          {placeholder}
        </option>
      )}
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  );
};

export default SelectInput;
