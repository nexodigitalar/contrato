import "./InputForm.scss";

/* Components */
import Input from "@/components/Input/Input";
import SelectInput from "@/components/SelectInput/SelectInput";

const InputForm = () => {
  return (
    <section>
      <div className="inputForm_div">
        <SelectInput placeholder="* Sexo" />
        <Input placeholder="* Nacionalidad" />
      </div>
      <div className="inputForm_div inputForm_div_mobile">
        <Input placeholder="* Email" />
      </div>

      <div className="inputForm_div">
        <SelectInput placeholder="* País" />
        <Input placeholder="* Departamento" />
      </div>
      <div className="inputForm_div">
        <Input placeholder="* Calle" />
        <Input placeholder="* Puerta Número" />
      </div>
      <div className="inputForm_div">
        <SelectInput placeholder="* Estado Civíl" />
        <Input placeholder="¿Es residente Uruguayo?" />
      </div>
      <div className="inputForm_div">
        <SelectInput placeholder="* Moneda Ingreso" />
        <Input placeholder="* Ingresos mensuales" />
      </div>
      <div className="inputForm_div">
        <Input placeholder="* Empresa en la que trabaja" />
        <Input placeholder="* Rubro de la Empresa" />
      </div>
      <div className="inputForm_div">
        <SelectInput placeholder="* Actividad principal" />
        <Input placeholder="* Origen de fondos" />
      </div>
    </section>
  );
};

export default InputForm;
