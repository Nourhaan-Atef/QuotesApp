import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
const RouteLayout = () => {
  return (
    <div className="md:mx-20 mx-10 mt-5 mb-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RouteLayout;
