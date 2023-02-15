/* Styles & Img */
import "./Step2.scss";
import userPhoto from "@/assets/img/info-user.png";

/* Hooks */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "@/store/userSlice/userSlice";

/* React Router */
import { useNavigate } from "react-router-dom";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import InputForm from "./components/InputForm";
import Button from "@/components/Button/Button";

const Step2 = () => {
  const { simulador } = useSelector((state) => state.data);
  const [initialValues, setInitialValues] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {}, [user]);

  return (
    <div className="step2">
      <div className="step2_container">
        <Header text="DATOS" bold="DEL TITULAR" logo={simulador} />
        <StepsContainer step={2} />

        <div className="step2_innerContainer">
          <div>
            <h3 className="step2_title">
              ¿<span className="green">Cuántos </span>titulares{" "}
              <span className="gray">son</span>?
            </h3>

            <InputForm
              initialValues={initialValues}
              setInitialValues={setInitialValues}
            />
          </div>
          <div className="step2_imgContainer">
            <img src={userPhoto} className="step2_img" />
          </div>
        </div>

        <div className="step2_buttonContainer">
          <Button
            text="Siguiente"
            click={() => {
              navigate("/datos-ocupacionales"),
                dispatch(setUsers(initialValues));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
