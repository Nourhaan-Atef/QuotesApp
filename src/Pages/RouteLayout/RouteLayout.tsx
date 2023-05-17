import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
const RouteLayout = () => {
  return (
    <div className="md:mx-20 sm:mx-10 mx-5 mt-5 mb-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RouteLayout;
