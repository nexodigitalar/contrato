import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

/* Components */
import NavBar from "@/components/NavBar/NavBar";

const ConfirmationLayout = () => {
  const { plazo } = useSelector((state) => state.data);
  const { value } = useSelector((state) => state.page);

  return (
    <div>
      <NavBar
        title={value === 6 || 7 ? "Confirmación de" : "Error de"}
        underline="contrato"
        plazo={plazo}
        image={false}
      />
      <Outlet />
    </div>
  );
};

export default ConfirmationLayout;
