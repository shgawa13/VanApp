import { Outlet, NavLink, Navigate } from "react-router-dom";
const HostLayout = () => {
  const aouth = true;

  return aouth ? (
    <>
      {" "}
      <div className=" flex items-center bg-slate-100 shadow-lg text-black h-16 w-80  mt-10 rounded-r-lg roun">
        <nav className=" flex  ml-5 gap-3  ">
          <NavLink
            to="."
            end={true}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-[#242424]" : ""
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-[#242424]" : ""
            }
          >
            Income
          </NavLink>

          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-[#242424]" : ""
            }
          >
            Reviews
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-[#242424]" : ""
            }
          >
            Vans
          </NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HostLayout;
