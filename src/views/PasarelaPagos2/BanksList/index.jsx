import styles from "./styles.module.scss";
import { banksData } from "@/utils/banks-data.js";

const BanksList = ({ setBankSelected, bankSelected }) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        {banksData.national.map((bank) => {
          return (
            <div key={bank.id} className={styles.button_container}>
              <div
                className={`${styles.dot} ${
                  bankSelected === bank.id && styles.dot_active
                }`}
              ></div>
              <button
                onClick={() => setBankSelected(bank.id)}
                className={`${styles.button} ${
                  bankSelected === bank.id && styles.button_active
                }`}
              >
                <img
                  src={bank.image}
                  alt={bank.title}
                  className={`${styles.bank} ${styles[bank.title]}`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BanksList;
