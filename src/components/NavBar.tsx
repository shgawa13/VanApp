import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className=" flex justify-between items-center bg-[#FFF7ED] h-20 ">
      <Link
        to="."
        className=" text-[#000000] font-bold cursor-pointer ml-7 text-lg "
      >
        #VANLIFE
      </Link>
      <div className={`flex text-[#4D4D4D] mr-7 gap-5 font-bold `}>
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive ? " border-b-2 border-[#242424]" : ""
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/van"
          className={({ isActive }) =>
            isActive ? " border-b-2 border-[#242424]" : ""
          }
        >
          Van
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? " border-b-2 border-[#242424]" : ""
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
