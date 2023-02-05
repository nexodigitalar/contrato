import "./InputForm.scss";

/* Components */
import Input from "../../../components/Input/Input";

const InputForm = () => {
  return (
    <section>
      <div className="inputForm_div">
        <Input placeholder="* Cédula" />
      </div>
      <div className="inputForm_div">
        <Input placeholder="Adjuntar frente de CI" />
        <Input placeholder="Adjuntar dorso de CI" />
      </div>
      <div className="inputForm_div">
        <Input placeholder="* Primer Nombre" />
        <Input placeholder="Segundo Nombre" />
      </div>
      <div className="inputForm_div">
        <Input placeholder="* Primer Apellido" />
        <Input placeholder="Segundo Apellido" />
      </div>
      <div className="inputForm_div">
        <Input placeholder="Fecha de nacimiento" />
        <Input placeholder="Teléfono / Celular" />
      </div>
    </section>
  );
};

export default InputForm;
