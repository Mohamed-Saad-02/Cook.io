import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";
import Button from "../ui/Button";

function RecipesSaved({ handleActive }) {
  return (
    <div className="flex items-center justify-center gap-x-6">
      <Link to="saved" onClick={() => handleActive("hiddenNav")}>
        <Button>
          <IoBookmark className="text-light-on-background" />
          Saved Recipes
        </Button>
      </Link>
    </div>
  );
}

export default RecipesSaved;

RecipesSaved.propTypes = {
  handleActive: PropTypes.func,
};
