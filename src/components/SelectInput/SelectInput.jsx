import "./SelectInput.scss";

const SelectInput = ({ placeholder }) => {
  return (
    <select name="select" className="selectInput">
      {placeholder && (
        <option value="placeholder" hidden selected>
          {placeholder}
        </option>
      )}
      <option value="value1">1</option>
      <option value="value2">2</option>
      <option value="value3">3</option>
      <option value="value3">4</option>
    </select>
  );
};

export default SelectInput;
