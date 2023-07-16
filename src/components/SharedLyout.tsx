import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const SharedLyout = () => {
  return (
    <>
      <div className=" flex flex-col  min-h-screen ">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default SharedLyout;
