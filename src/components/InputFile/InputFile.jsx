import "./InputFile.scss";

const InputFile = ({
  placeholder,
  click,
  change,
  selectedFile,
  name,
  error,
}) => {
  return (
    <form className="inputFile_form">
      <div
        className={
          error === false
            ? "inputFile_container border_error"
            : "inputFile_container"
        }
      >
        {selectedFile === undefined || selectedFile == "" ? (
          <p>{placeholder}</p>
        ) : (
          <p className="inputFile_p">{selectedFile.name}</p>
        )}
        <input
          type="file"
          name={name}
          className="inputfile"
          onChange={change}
          onClick={click}
        />
        <label>Examinar</label>
      </div>
      {error === false && <p className="input_error">Campo obligatorio</p>}
    </form>
  );
};

export default InputFile;
