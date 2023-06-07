import "./InputFile.scss";
import { useEffect, useState } from "react";

const InputFile = ({
  placeholder,
  click,
  change,
  selectedFile,
  name,
  error,
}) => {
  const [styles, setStyles] = useState("inputFile_container border_empty");

  useEffect(() => {
    if (error === false) {
      setStyles("inputFile_container border_error");
    } else if (selectedFile != undefined && selectedFile != "") {
      setStyles("inputFile_container");
    } else {
      setStyles("inputFile_container border_empty");
    }
  }, [selectedFile, error]);

  return (
    <form className="inputFile_form">
      <div className={styles}>
        {selectedFile === undefined || selectedFile == "" ? (
          <p>{placeholder}</p>
        ) : (
          <p className="inputFile_p">{selectedFile.name}</p>
        )}
        <input
          type="file"
          name={name}
          className="inputfile color_primary_background"
          onChange={change}
          onClick={click}
          accept="image/*"
        />
        <label className="color_primary_background">Examinar</label>
      </div>
      {error === false && <p className="input_error">Campo obligatorio</p>}
    </form>
  );
};

export default InputFile;
