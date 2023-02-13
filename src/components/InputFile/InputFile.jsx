import "./InputFile.scss";

const InputFile = ({ placeholder, click, selectedFile, name }) => {
  return (
    <form>
      <div className="inputFile_container">
        <p>{placeholder}</p>
        <input type="file" name={name} className="inputfile" onChange={click} />
        <label>Examinar</label>
      </div>
    </form>
  );
};

export default InputFile;
