// Import Icons
import { TiHome } from "react-icons/ti";
import { BiSolidUserCircle, BiSolidMessageDetail } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi2";

// Import Link
import { NavLink } from "react-router-dom";

// TODO: Add Testimonials
const Navigation = () => {
  return (
    <nav
      className="fixed md:right-8 md:top-1/2 md:translate-y-[-50%]
    bg-[rgba(255,255,255,0.1)] border-solid border-[1px] border-[rgba(255,255,255,0.1)]
    py-4 px-2 md:rounded-full
    md-max:bottom-0 md-max:left-1/2 md-max:translate-x-[-50%] md-max:w-full"
    >
      <ul className="flex md:flex-col gap-6 md-max:justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {
              <TiHome className="hover:text-primary duration-main md-max:text-[35px] md:text-[25px]" />
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {
              <BiSolidUserCircle className="hover:text-primary duration-main md-max:text-[35px] md:text-[25px]" />
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {
              <HiBookOpen className="hover:text-primary duration-main md-max:text-[35px] md:text-[25px]" />
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            {
              <BiSolidMessageDetail className="hover:text-primary duration-main md-max:text-[35px] md:text-[25px]" />
            }
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
