/* Img */
import cuotaLibre from "@/assets/img/cuota-libre.png";

/* Hooks */
import { useState } from "react";

/* Components */
import Step1 from "../views/Step1/Step1";
import Step1_2 from "../views/Step1_2/Step1_2";
import Step1_3 from "../views/Step1_3/Step1_3";
import Step2 from "../views/Step2/Step2";

const Home = () => {
  const [step, setStep] = useState(1);
  return <div>{step === 1 && <Step2 />}</div>;
};

export default Home;
