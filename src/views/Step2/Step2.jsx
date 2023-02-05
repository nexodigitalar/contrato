/* Styles & Img */
import "./Step2.scss";
import cuotaLibre from "@/assets/img/cuotaLibre.png";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";

const Step2 = () => {
  return (
    <div className="step2">
      <div className="step2_container">
        <Header text="PRODUCTO" bold="SELECCIONADO" logo={cuotaLibre} />
        <StepsContainer />

        <h3 className="step2_title">
          ¿<span className="green">Cuántos </span>titulares{" "}
          <span className="gray">son</span>?
        </h3>
      </div>
    </div>
  );
};

export default Step2;
