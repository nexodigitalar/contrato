import "./InputFile.scss";

const InputFile = ({ placeholder, click, selectedFile }) => {
  return (
    <form>
      <div className="inputFile_container">
        <p>{selectedFile?.name ? selectedFile.name : placeholder}</p>
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={click}
        />
        <label htmlFor="file">Examinar</label>
      </div>
    </form>
  );
};

export default InputFile;
