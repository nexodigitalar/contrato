import "./InputFile.scss";
import { useState, useEffect } from "react";

const InputFile = ({ placeholder }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

  return (
    <form>
      <div className="inputFile_container">
        <p>{selectedFile?.name ? selectedFile.name : placeholder}</p>
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <label htmlFor="file">Examinar</label>
      </div>
    </form>
  );
};

export default InputFile;
