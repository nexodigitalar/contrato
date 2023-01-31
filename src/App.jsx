/* Styles */
import "./App.css";

/* Components */
import MainLayout from "./layout/MainLayout";
import Home from "./views/Home/Home";

/* React Router Dom */
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
