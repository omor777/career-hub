import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="bg-bg-grad">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
