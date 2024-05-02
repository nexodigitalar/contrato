"use client";
import "./PasarelaPagos.scss";
import { useState } from "react";
// Components
import BanksList from "./BanksList";
import Summary from "./Summary";

const PasarelaPagos = () => {
  const [bankSelected, setBankSelected] = useState();
  const [cuotas, setCuotas] = useState(1);

  return (
    <div className="pasarela_container">
      <div className="pasarela_inner_container">
        <div className="confirmation_header">
          <p className="confirmation_header_title">Pago de primera cuota</p>
          <div className="confirmation_division"></div>
        </div>

        <div className="pasarela_row">
          <p className="pasarela_watermark">1</p>
          <div>
            <h3 className="pasarela_title">
              Seleccioná tu <span className="color_text">banco</span>
            </h3>
            <BanksList
              setBankSelected={setBankSelected}
              bankSelected={bankSelected}
            />
          </div>
        </div>

        <div className="pasarela_row">
          <p className="pasarela_watermark">2</p>

          <Summary bankSelected={bankSelected} button={() => null} />
        </div>
      </div>
    </div>
  );
};

export default PasarelaPagos;
