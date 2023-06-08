import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

/* Components */
import NavBar from "@/components/NavBar/NavBar";

const ConfirmationLayout = () => {
  const { plazo } = useSelector((state) => state.data);

  return (
    <div>
      <NavBar title="Confirmación de" underline="contrato" plazo={plazo} />
      <Outlet />
    </div>
  );
};

export default ConfirmationLayout;
