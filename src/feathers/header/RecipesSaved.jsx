import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";
import Button from "../ui/Button";

function RecipesSaved() {
  return (
    <NavLink
      to="saved"
      className="ml-auto flex flex-col items-center md:w-fit md:flex-row"
    >
      <Button
        kind="solid"
        className="flex flex-col items-center gap-y-1 px-3 py-2 transition-all duration-300 md:flex-row md:gap-x-3 md:rounded-md md:bg-light-primary md:text-white md:hover:bg-light-primary-hover"
      >
        <div className="icon flex items-center justify-center text-lg">
          <IoBookmark className="text-light-on-background" />
        </div>
        <span className="text-sm md:text-base">Saved</span>
      </Button>
    </NavLink>
  );
}

export default RecipesSaved;

RecipesSaved.propTypes = {
  handleActive: PropTypes.func,
};
