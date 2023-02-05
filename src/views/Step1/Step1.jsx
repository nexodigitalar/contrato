import Step1_1 from "@/views/Step1_1/Step1_1";
import Step1_2 from "@/views/Step1_2/Step1_2";
import Step1_3 from "@/views/Step1_3/Step1_3";

import { useState } from "react";

const Step1 = () => {
  const [page, setPage] = useState(1);

  const changePage = (number) => {
    setPage(number);
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      {page === 1 && <Step1_1 changePage={changePage} />}
      {page === 2 && <Step1_2 changePage={changePage} />}
      {page === 3 && <Step1_3 />}
    </>
  );
};

export default Step1;
