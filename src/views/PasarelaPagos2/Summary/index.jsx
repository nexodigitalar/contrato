import styles from "./styles.module.scss";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button/Button";
import { banksData } from "@/utils/banks-data.js";
import { useState } from "react";
import { useEffect } from "react";

const Summary = ({ bankSelected }) => {
  const [bank, setBank] = useState(null);

  useEffect(() => {
    console.log(bankSelected);
    const bank = banksData.national.find((i) => i.id === bankSelected);
    setBank(bank);
  }, [bankSelected]);

  return (
    <div className={styles.container}>
      <div className={styles.column_container}>
        <div className={styles.column}>
          <div className={styles.subtitle}>
            <Arrow />
            <h5>Resumen de pago</h5>
          </div>
          <div className={styles.text_container}>
            <p className="text">Sus cuotas vencerán los 10 de cada mes</p>
            <p>
              Cuota promedio: <b className="color_text">$7.051,00</b>
            </p>
          </div>
        </div>
        <div className={`${styles.column} ${styles.column_end}`}>
          <div className={styles.subtitle}>
            <Arrow />
            <h5>
              MONTO A PAGAR: <span className="color_text">$2348</span>
            </h5>
          </div>

          <p className={styles.message}>
            * El importe debe estar entre el mínimo 13.000,00 y máximo 26.000,00
            establecido
          </p>
          {bankSelected && bank && (
            <img
              src={`../src/assets/img/banks/0${bankSelected}.png`}
              alt="Banco"
              className={`${styles.bank_image} ${styles[bank?.title]}`}
              width={100}
              height={20}
            />
          )}
          <Button text="CONFIRMAR Y PAGAR" click={() => null} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
