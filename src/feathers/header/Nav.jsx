import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import RecipesSaved from "./RecipesSaved";

const style = {
  link: `before:bg-light-primary relative block py-7 transition-all
            before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 hover:before:w-full before:rounded opacity-70 hover:opacity-100 duration-300`,

  nav: "flex-col gap-y-6 bg-white px-4 py-3 transition-all duration-500 md:static md:h-fit md:w-3/4 md:flex-row md:items-center md:justify-between md:gap-y-0 md:p-0 absolute left-0 top-0 flex h-screen w-72 z-20 md:z-0 md:translate-x-0",

  overlay: `overlay absolute left-0 top-0 -z-10 h-screen w-screen bg-light-primary-container transition-all duration-300 md:hidden`,
};

function Nav({ isActive, handleActive }) {
  return (
    <>
      <nav className={`${!isActive && "-translate-x-72"} ${style.nav}`}>
        <ul className="flex flex-col gap-x-20 font-medium md:flex-row md:items-center ">
          <li>
            <NavLink
              to="/"
              className={style.link}
              onClick={() => handleActive("hiddenNav")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={style.link}
              onClick={() => handleActive("hiddenNav")}
            >
              Recipes
            </NavLink>
          </li>
        </ul>
        <RecipesSaved handleActive={handleActive} />
      </nav>

      <div
        className={`${isActive ? "visible opacity-60" : "invisible opacity-0"} ${style.overlay}`}
        onClick={() => handleActive("hiddenNav")}
      ></div>
    </>
  );
}

export default Nav;

Nav.propTypes = {
  isActive: PropTypes.bool,
  handleActive: PropTypes.func,
};
