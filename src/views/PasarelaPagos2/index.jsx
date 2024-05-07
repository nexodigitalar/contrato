"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import BanksList from "./BanksList";
import Summary from "./Summary";

const PasarelaPagos = () => {
  const [bankSelected, setBankSelected] = useState();

  return (
    <section className={styles.container}>
      <Dropdown title="Elegí tu medio de pago" initial={true}>
        <BanksList
          setBankSelected={setBankSelected}
          bankSelected={bankSelected}
        />
      </Dropdown>
      <Summary bankSelected={bankSelected} />
    </section>
  );
};

export default PasarelaPagos;
