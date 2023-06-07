import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

/* Components */
import NavBar from "@/components/NavBar/NavBar";

const MainLayout = () => {
  const { plazo } = useSelector((state) => state.data);

  return (
    <div>
      <NavBar title="Contrato" underline="online" plazo={plazo} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
