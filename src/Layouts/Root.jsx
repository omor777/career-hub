import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Root;
