import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
const RouteLayout = () => {
  // Change Tab Name
  const location = useLocation();
  useEffect(() => {
    document.title = `Quotes App | ${
      location.pathname === "/" ? "Home" : location.pathname.replaceAll("/", "")
    }`;
  }, [location.pathname]);
  console.log(location);
  return (
    <div className="md:mx-20 sm:mx-10 mx-5 mt-5 mb-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RouteLayout;
