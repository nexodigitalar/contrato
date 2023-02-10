import "./InputForm.scss";

/* Hooks */
import { useState } from "react";

/* Components */
import Input from "../../../components/Input/Input";
import InputFile from "../../../components/InputFile/InputFile";
import useValidateInput from "../../../hooks/useValidate";

const InputForm = ({ index }) => {
  const [fileFront, setFileFront] = useState(null);
  const [fileBack, setFileBack] = useState(null);

  return (
    <section>
      <div className="inputForm2_div inputForm2_mobile">
        <Input placeholder="* Cédula" error="Ingrese su cédula" type="text" />
      </div>
      <div className="inputForm2_div inputForm_mobile">
        <InputFile
          placeholder="Adjuntar frente de CI"
          selectedFile={fileFront}
          click={(e) => {
            setFileFront(e.target.files[0]);
          }}
        />
        <InputFile
          placeholder="Adjuntar dorso de CI"
          selectedFile={fileBack}
          click={(e) => setFileBack(e.target.files[0])}
        />
      </div>
      <div className="inputForm2_div">
        <Input
          placeholder="* Primer Nombre"
          error="Ingrese su primer nombre"
          type="text"
          click={(e) => {
            useValidateInput(e);
          }}
        />
        <Input placeholder="Segundo Nombre" error="." type="text" />
      </div>
      <div className="inputForm2_div">
        <Input
          placeholder="* Primer Apellido"
          error="Ingrese su primer apellido"
          type="text"
          click={(e) => useValidateInput(e)}
        />
        <Input placeholder="Segundo Apellido" error="." type="text" />
      </div>
      <div className="inputForm2_div">
        <Input placeholder="* Fecha de nacimiento" />
        <Input placeholder="* Teléfono / Celular" type="number" />
      </div>
    </section>
  );
};

export default InputForm;
