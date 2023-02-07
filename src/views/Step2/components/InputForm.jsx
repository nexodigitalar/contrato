import "./InputForm.scss";

/* Hooks */
import { useState } from "react";

/* Components */
import Input from "../../../components/Input/Input";
import InputFile from "../../../components/InputFile/InputFile";

const InputForm = () => {
  const [fileFront, setFileFront] = useState(null);
  const [fileBack, setFileBack] = useState(null);

  return (
    <section>
      <div className="inputForm2_div inputForm2_mobile">
        <Input placeholder="* Cédula" />
      </div>
      <div className="inputForm2_div inputForm_mobile">
        <InputFile
          placeholder="Adjuntar frente de CI"
          selectedFile={fileFront}
          click={(e) => setFileFront(e.target.files[0])}
        />
        <InputFile
          placeholder="Adjuntar dorso de CI"
          selectedFile={fileBack}
          click={(e) => setFileBack(e.target.files[0])}
        />
      </div>
      <div className="inputForm2_div">
        <Input placeholder="* Primer Nombre" />
        <Input placeholder="Segundo Nombre" />
      </div>
      <div className="inputForm2_div">
        <Input placeholder="* Primer Apellido" />
        <Input placeholder="Segundo Apellido" />
      </div>
      <div className="inputForm2_div">
        <Input placeholder="Fecha de nacimiento" />
        <Input placeholder="Teléfono / Celular" />
      </div>
    </section>
  );
};

export default InputForm;
