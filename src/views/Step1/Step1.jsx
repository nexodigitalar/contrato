import Step1_1 from "@/views/Step1_1/Step1_1";
import Step1_2 from "@/views/Step1_2/Step1_2";
import Step1_3 from "@/views/Step1_3/Step1_3";
import Spinner from "@/components/Spinner/Spinner";

/* Hooks */
import { useState } from "react";
import useScrollTop from "@/hooks/useScrollTop";

const Step1 = ({ spinner }) => {
  const [page, setPage] = useState(1);

  const changePage = (number) => {
    setPage(number);
    useScrollTop();
  };

  return (
    <>
      {spinner ? (
        <Spinner styles="spinner_home" />
      ) : (
        <>
          {page === 1 && <Step1_1 changePage={changePage} />}
          {page === 2 && <Step1_2 changePage={changePage} />}
          {page === 3 && <Step1_3 />}
        </>
      )}
    </>
  );
};

export default Step1;
