import "./SelectInput.scss";

const SelectInput = () => {
  return (
    <select name="select" className="selectInput">
      <option value="value1" selected>
        1
      </option>
      <option value="value2">2</option>
      <option value="value3">3</option>
      <option value="value3">4</option>
    </select>
  );
};

export default SelectInput;
