/* React Router Dom */
import { Outlet } from "react-router-dom";

/* Components */
import NavBar from "@/components/NavBar/NavBar";

const ConfirmationLayout = () => {
  return (
    <div>
      <NavBar title="Confirmación de" underline="contrato" />
      <Outlet />
    </div>
  );
};

export default ConfirmationLayout;
