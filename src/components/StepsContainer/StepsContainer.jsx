import "./StepsContainer.scss";
import Steps from "../Steps/Steps";

const StepsContainer = () => {
  return (
    <div className="stepsContainer">
      <div className="stepsContainer_container">
        <Steps text="PRODUCTO" textBold="SELECCIONADO" number="1" />
        <Steps text="INGRESO DE" textBold="DATOS PERSONALES" number="2" />
        <Steps text="DATOS" textBold="OCUPACIONALES" number="3" />
        <Steps text="RESUMEN" textBold="DEL PLAN" number="4" />
      </div>
    </div>
  );
};

export default StepsContainer;
