import "./InputFile.scss";

const InputFile = ({ placeholder, click, selectedFile, name, error }) => {
  return (
    <form>
      <div className="inputFile_container">
        {selectedFile != "" ? <p>{placeholder}</p> : <p>{selectedFile}</p>}
        <input type="file" name={name} className="inputfile" onChange={click} />
        <label>Examinar</label>
      </div>
      {error === false && <p className="input_error">Campo obligatorio</p>}
    </form>
  );
};

export default InputFile;
