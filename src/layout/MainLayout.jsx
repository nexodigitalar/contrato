/* React Router Dom */
import { Outlet } from "react-router-dom";

/* Components */
import NavBar from "@/components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
