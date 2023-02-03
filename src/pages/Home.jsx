/* Img */
import cuotaLibre from "@/assets/img/cuota-libre.png";

/* Hooks */
import { useState } from "react";

/* Components */
import Step1 from "../views/Step1/Step1";
import Step1_2 from "../views/Step1_2/Step1_2";
import Step1_3 from "../views/Step1_3/Step1_3";

const Home = () => {
  const [step, setStep] = useState(1);
  return <div>{step === 1 && <Step1_3 />}</div>;
};

export default Home;
