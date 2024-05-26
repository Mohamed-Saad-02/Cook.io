import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import RecipesSaved from "./RecipesSaved";
import { GoHomeFill } from "react-icons/go";
import { FaBurger } from "react-icons/fa6";

const style = {
  link: `md:before:bg-light-primary md:relative block md:py-7 transition-all
            md:before:absolute md:before:bottom-0 md:before:left-0 md:before:h-[3px] md:md:before:w-0 md:before:transition-all md:before:duration-300 md:hover:before:w-full md:before:rounded md:opacity-70 md:hover:opacity-100 duration-300 gap-y-1 px-3 py-2`,

  nav: "bg-white md:px-4 h-[70px] md:h-fit transition-all duration-500 md:static md:h-fit md:w-3/4 items-center md:justify-between md:gap-y-0 md:p-0 fixed left-0 bottom-0 flex w-full z-20",

  overlay: `overlay absolute left-0 top-0 -z-10 h-screen w-screen bg-light-primary-container transition-all duration-300 md:hidden`,
};

function Nav() {
  return (
    <>
      <nav className={`${style.nav}`}>
        <ul className="flex flex-1 items-center justify-between gap-x-4 font-medium md:gap-x-20">
          <li className="order-2 md:order-none">
            <NavLink
              to="/"
              className={`${style.link} flex flex-col items-center md:flex-row`}
            >
              <div className="icon flex items-center justify-center text-lg md:hidden">
                <GoHomeFill />
              </div>
              <span className="text-sm md:text-base">Home</span>
            </NavLink>
          </li>
          <li className="order-1 md:order-none">
            <NavLink
              to="/recipes"
              className={`${style.link} flex flex-col items-center md:flex-row`}
            >
              <div className="icon flex items-center justify-center text-lg md:hidden">
                <FaBurger />
              </div>
              <span className="text-sm md:text-base">Recipes</span>
            </NavLink>
          </li>
          <li className="order-3 md:order-none md:flex-1">
            <RecipesSaved />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

Nav.propTypes = {
  isActive: PropTypes.bool,
  handleActive: PropTypes.func,
};
