import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";

const Summary = ({ bankSelected }) => {
  const [valueToPay, setValueToPay] = useState(13200);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let isValueCorrect =
      Number(valueToPay) >= 13000 && Number(valueToPay) <= 26000;
    if (bankSelected && isValueCorrect) {
      setIsDisabled(false);
    }
  }, [bankSelected, valueToPay]);

  return (
    <div className={styles.container}>
      <div className={styles.column_container}>
        <div className={styles.column}>
          <h3 className="pasarela_title">
            Resumen de tu <span className="color_text">pago</span>
          </h3>
          <div className={styles.text_container}>
            <p className="text">
              Fecha de Vencimiento: <b>03/06/2024</b>
            </p>
            <p>
              Cuota promedio: <b>$7.051,00</b>
            </p>
          </div>
        </div>
        <div className={`${styles.column} ${styles.column_end}`}>
          <div className={styles.input_container}>
            <h3 className="pasarela_title">
              Monto a pagar: <span className="color_text">$2348</span>
            </h3>
          </div>

          {bankSelected && (
            <img
              src={`../src/assets/img/banks/0${bankSelected}.png`}
              alt="Banco"
              className={styles.bank_image}
              width={100}
              height={20}
            />
          )}
          <Button
            text="CONFIRMAR Y PAGAR"
            disabled={isDisabled}
            click={() => null}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
